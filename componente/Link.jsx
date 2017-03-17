import React, { Component } from "react";
import createHistory from "history/createHashHistory";
const history = createHistory();

import "../global.js";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    Click() {
        if (typeof this.props.transPage != "undefined") {
            if (this.props.transPage) {
                global.transPage = true;

            }
        }
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
