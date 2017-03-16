import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
        // this.transition = {
        //     login:
        // };
    }
    componentDidMount() {
        console.log("2 Transition Did");
    }
    componentWillMount() {
        console.log("0 Transition Will");
    }
    render() {
        console.log("1 Transition Render");
        console.log(this.props.location.pathname);
        var children = "";
        if (this.props) {
            children = <Route {...this.props} />;
            if (global.elist.transPage) {
                // console.log("animou");
                // global.elist.transPage = false;
                // console.log("virou FALSE - Transition.jsx");
                // console.log(this.props.location.pathname);
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
