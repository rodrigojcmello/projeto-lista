import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Redirect } from "react-router-dom";
import Route from "./componente/Route";

import createHistory from "history/createHashHistory";
const history = createHistory();

import Pagina1 from "./componente/Pagina1";
import Pagina2 from "./componente/Pagina2";
import Pagina3 from "./componente/Pagina3";

import "./global.js";
import "./css/dist/estilo.css";

// global.historico[0] = history.location.pathname;
// history.listen((location, action) => {
//     global.historico[1] = global.historico[0];
//     global.historico[0] = location.pathname;
//     console.log("mudei: " + location.pathname);
//     console.log("#####");
// });

// Componente Rota -------------------------------------------------------------

const Rota = () => (
    <Router>
        <div>
            <Route exact path="/" render={() => (
                <Redirect to="/pagina1" />
            )} />
            <Route path="/pagina1" component={Pagina1} />
            <Route path="/pagina2" component={Pagina2} />
            <Route path="/pagina3" component={Pagina3} />
        </div>
    </Router>
);

// Render ----------------------------------------------------------------------

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render(<Rota />, document.getElementById("raiz"));
