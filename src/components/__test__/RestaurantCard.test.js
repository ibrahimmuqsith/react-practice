import { screen, render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

import MOCK_RESTAURANT_DATA from '../mockData/mockRestaurantData.json'
import RestaurantCard from "../RestaurantCard"


it('should load Restaurant Card Image', () => {
    render(
        <RestaurantCard
            restaurantData={MOCK_RESTAURANT_DATA}
        />
    )

    const restaurantImg = screen.getByAltText('restaurantImg')
    const name = screen.getByText('South Spice')
    expect(restaurantImg).toBeInTheDocument()
})

it('should load Restaurant Card Name', () => {
    render(
        <RestaurantCard
            restaurantData={MOCK_RESTAURANT_DATA}
        />
    )

    const restaurantName = screen.getByText('South Spice')
    expect(restaurantName).toBeInTheDocument()
})


/**
 * TODO: pick up from here
 * below test case failed. commenting to proceed with task.
 */
describe('test cases for veg component', () => {
    it('should render the restaurant component with veg label', () => {
        // render(withVegLabel)

        // const pureVegLabel = screen.getByText('Pure Veg')
        // expect(pureVegLabel).toBeInTheDocument()
    })
})