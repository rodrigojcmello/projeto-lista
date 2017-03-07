import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <div>
                Index
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                        { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
