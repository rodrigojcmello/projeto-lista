import React, { Component } from "react";
import { Link } from "react-router-dom";

import Transition from "./Route/Transition";

import Pagina4 from "./Pagina4";
import Pagina5 from "./Pagina5";
import Pagina6 from "./Pagina6";

export default class extends Component {
    render() {
        return (
            <div className="full screen">
                <h1>Página 3</h1>
                <li><Link to="/pagina1">Página 1</Link></li>
                <li><Link to="/pagina2">Página 2</Link></li>
                <li><Link to="/pagina3">Página 3</Link></li>
                <li><Link to="/pagina3/pagina4">Página 4</Link></li>
                <li><Link to="/pagina3/pagina5">Página 5</Link></li>
                <li><Link to="/pagina3/pagina6">Página 6</Link></li>
                <Transition path="/pagina3" exact render={ () => (
                    <h3>Please select a topic.</h3>
                ) } />
                <Transition path="/pagina3/pagina4" component={Pagina4} />
                <Transition path="/pagina3/pagina5" component={Pagina5} />
                <Transition path="/pagina3/pagina6" component={Pagina6} />
            </div>
        );
    }
}
