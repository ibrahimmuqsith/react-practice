import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    src='https://static.vecteezy.com/system/resources/previews/011/405/724/non_2x/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg'
                />
            </div>
            <div className='navBar'>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Profile </li>
                    <li> Cart </li>
                </ul>

            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
            <Header />
            {/* <Body /> */}
            {/* <Footer /> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)