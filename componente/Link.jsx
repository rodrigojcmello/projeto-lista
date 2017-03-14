import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "../global.js";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    Click() {
        global.elist.transPage = false;
        if (typeof this.props.transPage != "undefined") {
            if (this.props.transPage) {
                global.elist.transPage = true;
                console.log("TRUE");
            }
        }
        console.log(location.origin + "/#" + this.props.to);
        location.href = location.origin + "/#" + this.props.to;
    }
    render() {
        return (
            <button type="button" onClick={this.Click.bind(this)}>
                {this.props.children}
            </button>
        );
    }
}
