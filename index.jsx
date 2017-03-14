import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Transition from "./componente/Transition";

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
        <Switch>
            <Route path="/" exact render={ () => (
                global.elist.usuario.id ? <Redirect to={ global.elist.usuario.url }/> : <Redirect to="/login" />
            ) } />
            <Transition path="/login" component={ Login } />
            <Transition path="/settings" component={ Settings } />
            <Transition path="/:usuario" component={ Usuario } nome="rodrigo" />
        </Switch>
    </Router>
), document.getElementById("raiz"));
