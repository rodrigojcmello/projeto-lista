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

import "./global.js";

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render((
    <Router>
        <Route path="/" exact render={ () => (
            global.usuario.id ? <Redirect to={global.usuario.url}/> : <Redirect to="/login" />
        ) } />
        <Transition path="/login" component={ Login } />
        <Transition path="/settings" component={ Settings } />
        <Transition path="/:usuario" component={ Usuario } />
    </Router>
), document.getElementById("raiz"));
