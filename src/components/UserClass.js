import { Component, useContext } from "react";
import {
    ENDPOINT_USER_DATA
} from "../utils/constants";
import UserContext from "../utils/context/UserContext";

/*
    1. Functonal Comp -> JS function
    2. Class Comp -> JS class
    3. class comp has a render fn which returns jsx.
*/
class UserClass extends Component {
    /*
        1. constructor -> initialise & bind state vars & methods
        2. super -> calls the parent React.Component to pass props to it.
        3. this -> the  props have to be accessed with this keyword.
    */
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userData: {},
        }
        console.log("Child Constructor")
    }

    /*
        1. constructor
        2. render
        3. componentDidMount
        componentDidMount is the useEffect of class component,
        like useEffect, API calls are made in componentDidMount.
    */
    async componentDidMount() {
        console.log("Child ComponentDidMount")
        const data = await fetch(ENDPOINT_USER_DATA)
        const jsonData = await data.json()
        this.setState({
            userData: jsonData
        })

        // create a timer
        this.timer = setInterval(() => {
            console.log("calling Timer")
        }, 1000)
    }

    /*
        1. update in state or Props
        2. react triggers re-render
        2. componentDidUpdate called
    */
    componentDidUpdate() {
        console.log("called componentDidUpdate")
    }

    /*
        componentWillUnmount - called before comp removed from DOM
    */
    componentWillUnmount() {
        console.log("componentWillUnmount: userClass removed from DOM")
        /* 
            In SPAs, there are no pages & ther changes are from one comp to another.
            When a timer is created in any comp, it will run forever, since comp are just replaced.
            this kills the performance & memory of app. Hence needs to be cleaned up.
        */
        clearInterval(this.timer)
    }

    render() {
        console.log("Child Render")
        const {
            name,
            location,
            company,
            html_url,
            avatar_url,
            login: userName = '',
        } = this.state.userData

        return (
            <div className="userContainer">
                {console.log("userData", this.state.userData)}
                <div className="restaurantCard flex-space-between">
                    <div className="userData">
                        <h3> App Logged In user :
                            <UserContext.Consumer>
                                {(data) => <> {data.loggedInUser} </>}
                            </UserContext.Consumer>
                        </h3>
                        <h3> User: {name} </h3>
                        <h3> UserName: {userName} </h3>
                        <h3> Location: {location} </h3>
                        <h3> Company: {company} </h3>
                        <h3> Profile: <a href={html_url} target="blank"> gitHub </a></h3>
                    </div>
                    <div className="userImg">
                        <img src={avatar_url} alt="avtr"></img>
                    </div>
                </div>

                <hr />
                <section className="lifeCycleMethodEg flex-space-between">
                    <h5> called from {this.props.componentType} Component </h5>
                    <button
                        onClick={() => {
                            this.setState({
                                count: this.state.count + 1
                            })
                        }}
                    >
                        Visitor Count = {this.state.count}
                    </button>
                    <button
                        onClick={() => {
                            this.setState({
                                count: 0
                            })
                        }}
                    >
                        Reset Visitor Count
                    </button>
                </section>
            </div>
        )
    }
}

export default UserClass