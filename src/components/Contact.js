import React from 'react'
import { LOREM_IPSUM } from '../utils/constants'

const Contact = () => {
    return (
        <div className='contactContainer'>
            <h1>
                Contact Us Page
            </h1>
            <p>
                {LOREM_IPSUM}
            </p>
            <form>
                <label> Name </label>
                <input
                    type='text'
                    className='inputBox'
                    placeholder='Enter name'
                />

                <label> Mobile Number </label>
                <input
                    type='text'
                    className='inputBox'
                    placeholder='Enter contact number'
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact