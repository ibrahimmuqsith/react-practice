import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Contact from "../Contact"

/**
 * each describe is a partitioning whithing a large list of test cases
 */
describe("part 1 - test cases for Contact us component", () => {
    /**
     * 1. test() create a test case
     * 2. render() fetches the componet to the js-dom
     * 3. creates a var to query
     * 4. uses getByRole() of 'screen' method to  get the html tag
     * 5. assertion compares the 'heading' variable
     * 6. toBeInTheDocument() checkes if it exists in he doc.
     */
    test("render contact component", () => {
        render(<Contact />)
        // querying
        const heading = screen.getByRole('heading')
        // assertion
        expect(heading).toBeInTheDocument();
    })
})

/**
 * a describe an be nested inside another describe.
 * this creates a partitioning of various test cases.
 */
describe("part 2 - test cases for contact us contents", () => {
    /**
     *  fetches the html button tag
     */
    test('check if the contact comp has a button', () => {
        render(<Contact />)
        const htmlButton = screen.getByRole('button')
        expect(htmlButton).toBeInTheDocument()
    })

    describe("an example to show a descrie inside another describe", () => {
        /**
         *  fetches a 'Submit' content in the html
         *  getByText() is case sensitive, hence it checks for
         *  'Submit' in the html and not 'submit'
         */
        test("check if there is a button in contact us component", () => {
            render(<Contact />)
            const button = screen.getByText('Submit')
            expect(button).toBeInTheDocument()
        })
    })
})

/**
 * it() is an alias of test()
 * there is no change in functionality at all.
 */
it('an example to show that it() is an alias for test() ', () => {
    render(<Contact />)

    /**
     * getAllByRole() is used for querying multiple queries.
     */
    const allInputs = screen.getAllByRole('textbox')

    /**
     * since we expect 2 texboxes, compare the query result length with 2.
     */
    expect(allInputs.length).toBe(2)
})