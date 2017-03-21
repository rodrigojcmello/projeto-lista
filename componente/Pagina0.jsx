import React, { Component } from "react";

import { Route } from "react-router-dom";

import Pagina1 from "./Pagina1.jsx";
import Pagina2 from "./Pagina2.jsx";
import Pagina3 from "./Pagina3.jsx";

export default class extends Component {
    render() {
        return (
            <div>
                <h1>Página 0</h1>
                <Route path="/pagina1" component={Pagina1} />
                <Route path="/pagina2" component={Pagina2} />
                <Route path="/pagina3" component={Pagina3} />
            </div>
        );
    }
}
