import React, { Component } from "react";
import { HashRouter as Router, Switch, Redirect, Link } from "react-router-dom";
import createHistory from "history/createHashHistory";
const history = createHistory();

import SubRoute from "./SubRoute";

import Pagina5 from "./Pagina5";
import Pagina6 from "./Pagina6";

export default class extends Component {
    componentDidMount() {
        // if (global.transition) {
        //     global.transition = false;
        //     history.replace("/pagina4");
        // } else {
        // }
        // if (this.props.location.pathname == "/pagina4") {
        //     history.push("/pagina4/pagina5");
        // }
    }
    render() {
        return (
            <div className="full screen">
                <h1>Página 4</h1>
                <Link to="/pagina1">Página 1</Link>
                <Link to="/pagina2">Página 2</Link>
                <Link to="/pagina3">Página 3</Link>
                <Link to="/pagina4">Página 4</Link>
                <li><Link to="/pagina4/pagina5">Página 5</Link></li>
                <li><Link to="/pagina4/pagina6">Página 6</Link></li>
            </div>
        );
    }
}
