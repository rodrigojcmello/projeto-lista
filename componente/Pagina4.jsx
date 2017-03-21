import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import SubRoute from "./SubRoute";

import Pagina5 from "./Pagina5";
import Pagina6 from "./Pagina6";

export default class extends Component {
    render() {
        return (
            <div className="full screen">
                <h1>Página 4</h1>
                <Link to="/pagina3">Voltar para 3</Link>
                <li><Link to="/pagina4/pagina5">Página 5</Link></li>
                <li><Link to="/pagina4/pagina6">Página 6</Link></li>
                <Router>
                    <Switch>
                        <SubRoute path="/pagina4/pagina5" component={Pagina5} />
                        <SubRoute path="/pagina4/pagina6" component={Pagina6} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
