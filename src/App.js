import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/redux/appStore'

import Header from './components/Header'
import Body from './components/Body'
// import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Error from './utils/Error'
import Footer from './components/Footer'
import { LOADING_MESSAGE } from './utils/constants'

import './index.scss'
// disbaled tailwindCSS coz of version issues
// import '../index.css'


/*
    1. by def, all the above routes are loaded into a single bundle.
    2. lazy loading <Grocery /> will split this component to another bundle
    3. <Grocery /> will be called as that route is triggered from Nav bar.
    4. In the app router, <Grocery /> is defined for a specific path.
    5. It is enclosed with <Suspense /> describe lazy loading.
    6. <Suspense> takes fallback JSX, i.e placeholder to be shown when that bundle is downloaded.
*/
const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

const App = () => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        setUserName('')
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div >
            </UserContext.Provider>
        </Provider>
    )
}

/* 
    1. createBrowserRouter lets us create a router service in App
    2. Outlet ele acts as a placeholder for the appRouter created.
    3. here / path is the def path of app.
    4. all children paths are routes after the def route
    5. dynamic id in the static route is implemented by /:resId 
    6. errorElement lets us set a custom error comp instead of page break
*/
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense
                        fallback={<h1> {LOADING_MESSAGE} </h1>}
                    >
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense
                        fallback={<h1> {LOADING_MESSAGE} </h1>}
                    >
                        <Grocery />
                    </Suspense >
                )
            },
            {
                path: 'restaurants/:resId',
                element: <Menu />
            }
        ]
    }
])

/*
    1. fetch the 'root' div of html element
    2. attach it to root var of JS by createRoot of ReactDOM
    3. render the JS root var using render()
    4. pass the RouterProvider ele to render to implement routing 
*/
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
root.render(
    <RouterProvider
        router={appRouter}
    />
)