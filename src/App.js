import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Error from './utils/Error'

import './index.scss'


const App = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
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
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
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