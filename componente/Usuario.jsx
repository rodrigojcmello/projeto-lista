import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

import Transition from "./Route/Transition";
import Link from "./Link";


export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("componentWillMount Usuario");
    }
    componentDidMount() {
        console.log("componentDidMount Usuario");
    }
    render() {
        return (
            <div className="tela">
                <h1>Usuário</h1>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/:usuario/sub1">Sub 1 link</Link></li>
                <li><Link to="/:usuario/sub2">Sub 2 link</Link></li>
                {/* <li><a onClick={this.clickSub1}>Sub 1 click</a></li> */}
                {/* <li><a onClick={this.clickSub2}>Sub 2 click</a></li> */}
                <Transition path="/:usuario/sub1" component={Sub1} />
                <Transition path="/:usuario/sub2" component={Sub2} />
                {/* <Route exact path="/:usuario" render={()=>(
                    <h3>Please select a topic.</h3>
                )}/> */}
            </div>
        );
    }
}
