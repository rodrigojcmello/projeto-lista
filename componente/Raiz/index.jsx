import React from "react";
import { Link, browserHistory } from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "../../global.js";
import "./transition.css";
import "./style.css";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        global.elist.transName = "swipe-right";
        if (global.elist.usuario.id) {
            browserHistory.push("#/tag");
        } else {
            browserHistory.push("#/login");
        }
    }
    render() {
        var children = "";
        if (this.props.children) {
            children = this.props.children;
            if (global.elist.transName) {
                children =
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName={ global.elist.transName }
                        transitionEnterTimeout={ global.elist.transEnter }
                        transitionLeaveTimeout={ global.elist.transLeave }
                        >
                            { React.cloneElement(this.props.children, { key: this.props.location.pathname }) }
                    </ReactCSSTransitionGroup>;
            }
        }
        return (
            <div>
                { children }
            </div>
        );
    }
}
