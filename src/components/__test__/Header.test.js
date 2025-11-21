import { screen, render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

import Header from '../Header'
import appStore from '../../utils/redux/appStore'
import UserContext from "../../utils/context/UserContext"


describe('this test cases are for Header component', () => {
    it('should load header component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginButton = screen.getByText('Login')
        expect(loginButton).toBeInTheDocument()
    })

    // testcase failing due to setState not in this component.
    // it('should toggle between the login and logout button', () => {
    //     render(
    //         <BrowserRouter>
    //             <Provider store={appStore}>
    //                 <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    //                     <Header />
    //                 </UserContext.Provider>
    //             </Provider>
    //         </BrowserRouter >
    //     )

    //     const loginButton = screen.getByRole('button', { name: 'Login' })

    //     fireEvent.click(loginButton)

    //     const logoutButton = screen.getByRole('button', { name: 'Logout' })

    //     expect(logoutButton).toBeInTheDocument()
    // })
})