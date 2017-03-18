import React from "react";
import { render } from "react-dom";
import { Route, Redirect } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Router from "./componente/Route/Router";
import Transition from "./componente/Route/Transition";

import Login from "./componente/Login";
import Usuario from "./componente/Usuario";
import Pagina from "./componente/Pagina";
import Settings from "./componente/Settings";

import Pagina1 from "./componente/Pagina1";
import Pagina2 from "./componente/Pagina2";
import Pagina3 from "./componente/Pagina3";

import "./global.js";
import "./css/dist/estilo.css";

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render((
    <Router>
        {/* <Route path="/" exact render={ () => (
            global.usuario.id ? <Redirect to={global.usuario.url}/> : <Redirect to="/login" />
        ) } />
        <Transition path="/login" component={ Login } />
        <Transition path="/settings" component={ Settings } />
        <Transition path="/:usuario" component={ Usuario } />
        <Transition path="/:usuario" component={ Usuario } /> */}
        <Route path="/" exact render={ () => (
            <Redirect to="/pagina1"/>
        ) } />
        <Transition path="/pagina1" component={Pagina1} />
        <Transition path="/pagina2" component={Pagina2} />
        <Transition path="/pagina3" component={Pagina3} />
    </Router>
), document.getElementById("raiz"));
