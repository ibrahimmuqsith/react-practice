// _ _ dunder
// file_name.test.js
// file_name.spec.js

const { default: sum } = require("../../utils/sum")

/**
 * 1. import the module to be tested
 * 2. test()    -> this method runs the test case with 2 args.
 * 3. arg1      -> description of test case.
 * 4. arg2      -> a function to test the scenarios.
 * 5. expect()  -> a prediction of the test case. (Assertion)
 * 6. toBe()    -> a return result forseen after testcase.
 */

test(
    "find the sum of two numbers",
    () => {
        const result = sum(3, 5)
        // Assertion
        expect(result).toBe(8)
    }
)