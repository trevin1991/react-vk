import React from "react";
import { connect } from "react-redux";

import User from "../components/User";
import Page from "../components/Page";

class App extends React.Component {
    render() {
        return (
            <div>
                <User data={ this.props.user } />
                <Page data={ this.props.page } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App);