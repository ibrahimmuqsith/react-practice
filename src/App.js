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
                path: 'restaurant/:resId',
                element: <Menu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
root.render(
    <RouterProvider
        router={appRouter}
    />
)