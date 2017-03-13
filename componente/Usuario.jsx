import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount() {
    //     global.elist.transPage = false;
    // }
    render() {
        return (
            <div className="tela">
                <h1>Usuário</h1>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/:usuario/sub1">Sub 1</Link></li>
                <li><Link to="/:usuario/sub2">Sub 2</Link></li>
                <Route path="/:usuario/sub1" component={Sub1} transFull="false" />
                <Route path="/:usuario/sub2" component={Sub2} transFull="false" />
                <Route exact path="/:usuario" render={()=>(
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}
