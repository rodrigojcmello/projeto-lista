import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./componente/Route";

import createHistory from "history/createHashHistory";
const history = createHistory();

import Pagina1 from "./componente/Pagina1";
import Pagina2 from "./componente/Pagina2";
import Pagina3 from "./componente/Pagina3";

import "./global.js";
import "./css/dist/estilo.css";

// Última Rota -----------------------------------------------------------------

global.historico = history.location.pathname;
history.listen((location, action) => {
    global.historico = location.pathname;
});

// Componente Rota -------------------------------------------------------------

const Rota = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/pagina1" />
            )} />
            <Route path="/pagina1" component={Pagina1} />
            <Route path="/pagina2" component={Pagina2} />
            <Route path="/pagina3" component={Pagina3} />
        </Switch>
    </Router>
);

// Render ----------------------------------------------------------------------

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render(<Rota />, document.getElementById("raiz"));
