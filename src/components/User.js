import React from "react";

export default class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { name, surname, age } = this.props.data;
        return (
            <div>
                <p>Hello, { name } { surname }!</p>
                <p>You have { age } years old!</p>
            </div>
        )
    }
}