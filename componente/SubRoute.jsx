import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TransitionGroup
                component="div"
                transitionName={"transition-slide-left"}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={501}
                >
                    <Route {...this.props} key={this.props.location.pathname} />
            </TransitionGroup>
        );
    }
}
