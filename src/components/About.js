import React from 'react'
import { LOREM_IPSUM } from '../utils/constants'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1>
                About Us Page
            </h1>
            <p>
                {LOREM_IPSUM}
            </p>
        </div>
    )
}

export default About