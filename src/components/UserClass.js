import { Component } from "react";
import {
    ENDPOINT_USER_DATA
} from "../utils/constants";

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
        componentDidMount is the useEffect of clss component 8
        All API calls can be made from componentDidMount just like useEffect
    */
    async componentDidMount() {
        // console.log("Child ComponentDidiMount ")
        const data = await fetch(ENDPOINT_USER_DATA)
        const jsonData = await data.json()
        this.setState({
            userData: jsonData
        })
    }

    render() {
        // console.log("Child Render")
        return (
            <div className="userContainer">
                {console.log("userData", this.state.userData)}
                <h1> called from {this.props.componentType} Component </h1>
                <h1> User: </h1>
                <h2> User Name: </h2>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    Visitor No. {this.state.count}
                </button>
            </div>
        )
    }
}

export default UserClass