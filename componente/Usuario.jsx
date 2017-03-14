import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

import Link from "./Link.jsx";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // global.elist.transPage = false;
        // console.log("OI");
    }
    // clickSub1() {
    //     global.elist.transPage = false;
    //     location.href = location.origin + "#/:usuario/sub1";
    // }
    // clickSub2() {
    //     global.elist.transPage = false;
    //     location.href = location.origin + "#/:usuario/sub2";
    // }
    render() {
        return (
            <div className="tela">
                <h1>Usuário</h1>
                <li><Link to="/login" transPage={true} >Voltar</Link></li>
                <li><Link to="/:usuario/sub1">Sub 1 link</Link></li>
                <li><Link to="/:usuario/sub2" transPage={true} >Sub 2 link</Link></li>
                {/* <li><a onClick={this.clickSub1}>Sub 1 click</a></li> */}
                {/* <li><a onClick={this.clickSub2}>Sub 2 click</a></li> */}
                <Route path="/:usuario/sub1" component={Sub1} />
                <Route path="/:usuario/sub2" component={Sub2} />
                <Route exact path="/:usuario" render={()=>(
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}
