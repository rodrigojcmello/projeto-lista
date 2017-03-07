import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import Raiz from "./componente/Raiz";
import Acesso from "./componente/Acesso";
import Tarefa from "./componente/Tarefa";
import Configuracao from "./componente/Configuracao";

var raiz = document.createElement("div");
raiz.id = "raiz";
document.body.appendChild(raiz);

render((
    <Router history={hashHistory}>
        <Route path="/" component={Raiz}>
            {/* <IndexRoute component={Teste} /> */}
            <Route path="/login" component={Acesso} />
            <Route path="/tag" component={Tarefa} />
            <Route path="/settings" component={Configuracao} />
        </Route>
    </Router>
), document.getElementById("raiz"));
