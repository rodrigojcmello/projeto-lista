import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        console.log("global.elist.transPage");
        console.log(global.elist.transPage);
        var children = "";
        if (this.props) {
            children = <Route {...this.props} />;
            if (global.elist.transPage) {
                console.log("animou");
                children =
                    <TransitionGroup
                        component="div"
                        transitionName="swipe"
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={800}
                        >
                            <Route {...this.props} key={this.props.location.pathname} />
                    </TransitionGroup>;
            }
        }
        return (
            <div>
                { children }
            </div>
        );
    }
}
