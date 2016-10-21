import React from "react";

export default class Page extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { photos, year } = this.props.data;

        return (
            <div>
                <p>You have { photos.length } photos in { year } year!</p>
            </div>
        )
    }
}