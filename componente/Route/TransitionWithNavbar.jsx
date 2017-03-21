import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

import Pagina4 from "../Pagina4";
import Pagina5 from "../Pagina5";
import Pagina6 from "../Pagina6";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.children.props);
        var enter = 400;
        var leave = 400;

        console.log("location");
        console.log(location);
        return (
            <TransitionGroup
                component="div"
                transitionName="transition-slide-left-with-navbar"
                transitionEnterTimeout={enter}
                transitionLeaveTimeout={leave}
                >
                {/* { React.cloneElement(this.props.children, { key: this.props.children.props.path }) } */}
                {/* <Route {...this.props} key="/pagina3" /> */}
                {/* { React.cloneElement(<Route {...this.props} />, { key: this.props.path }) } */}
                <Switch>
                    <Route path="/pagina3/pagina4" component={Pagina4} key="/pagina3/pagina4" />
                    <Route path="/pagina3/pagina5" component={Pagina5} key="/pagina3/pagina5" />
                    <Route path="/pagina3/pagina6" component={Pagina6} key="/pagina3/pagina6" />
                </Switch>
            </TransitionGroup>
        );
    }
}
