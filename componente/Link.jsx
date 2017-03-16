import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
const history = createHistory();

// import { Link } from "react-router-dom";

import "../global.js";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("4 Link Will");
    }
    componentDidMount() {
        console.log("5 Link Did");
    }
    Click() {
        console.log("6 Link Click");
        // global.elist.transPage = false;
        if (typeof this.props.transPage != "undefined") {
            if (this.props.transPage) {
                global.elist.transPage = true;

            } else {
            }
        } else {
        }
        // console.log(location.origin + "/#" + this.props.to);
        // location.href = location.origin + "/#" + this.props.to;
        history.push(this.props.to);
    }
    render() {
        return (
            <button type="button" onClick={this.Click.bind(this)}>
                {this.props.children}
            </button>
        );
    }
}
