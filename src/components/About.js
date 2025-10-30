import React, { Component } from 'react'
import { LOREM_IPSUM } from '../utils/constants'
import User from './User'
import UserClass from './UserClass'

// const About = () => {
//     return (
//         <div className='aboutContainer'>
//             <h1>
//                 About Us Page
//             </h1>
//             <User
//                 componentType={'Function'}
//             />
//             <UserClass
//                 componentType={'Class'}
//             />
//             <p>
//                 {LOREM_IPSUM}
//             </p>
//         </div>
//     )
// }

class About extends Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

    render() {
        console.log("Parent Render")
        return (
            <div className='aboutContainer'>
                <UserClass
                    componentType={'Class'}
                />
            </div>
        )
    }
}

export default About