import React, { Component } from "react";
import { HashRouter, Switch, Link } from "react-router-dom";
import createHistory from "history/createHashHistory";
const history = createHistory();

export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        history.listen((location, action) => {
            global.historico[1] = global.historico[0];
            global.historico[0] = location.pathname;
        });
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    {this.props.children}
                </Switch>
            </HashRouter>
        );
    }
}
