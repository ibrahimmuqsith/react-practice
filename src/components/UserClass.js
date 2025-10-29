import { Component } from "react";

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
    }

    render() {
        return (
            <div className="userContainer">
                <h1> called from {this.props.componentType} Component </h1>
                <h1> User: </h1>
                <h2> User Name: </h2>
            </div>
        )
    }
}

export default UserClass