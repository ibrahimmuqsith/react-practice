import React from 'react'
import { LOREM_IPSUM } from '../utils/constants'
import User from './User'
import UserClass from './UserClass'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1>
                About Us Page
            </h1>
            <User
                componentType={'Function'}
            />
            <UserClass
                componentType={'Class'}
            />
            <p>
                {LOREM_IPSUM}
            </p>
        </div>
    )
}

export default About