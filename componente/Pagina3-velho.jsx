import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Transition from "./Route/TransitionWithNavbar";

import Pagina4 from "./Pagina4";
import Pagina5 from "./Pagina5";
import Pagina6 from "./Pagina6";

class Pagina3sub extends Component {
    render() {
        return (
            <div>
                <Transition path="/pagina3/pagina4" component={Pagina4} />
                <Transition path="/pagina3/pagina5" component={Pagina5} />
                <Transition path="/pagina3/pagina6" component={Pagina6} />
            </div>
        );
    }
}

export default class extends Component {
    render() {
        return (
            <div className="full screen">
                <h1>Página 3</h1>
                <Link to="/pagina1">Página 1</Link>
                <Link to="/pagina2">Página 2</Link>
                <Link to="/pagina3">Página 3</Link>
                <li><Link to="/pagina3/pagina4">Página 4</Link></li>
                <li><Link to="/pagina3/pagina5">Página 5</Link></li>
                <li><Link to="/pagina3/pagina6">Página 6</Link></li>
                {/* <Route path="/pagina3" component={Pagina3sub} /> */}
                {/* <Transition path="/pagina3" exact render={() => (
                    <h1>Teste</h1>
                )} /> */}
                {/* <Transition>
                    <Route path="/pagina3/pagina4" component={Pagina4} />
                </Transition>
                <Transition>
                    <Route path="/pagina3/pagina5" component={Pagina5} />
                </Transition>
                <Transition>
                    <Route path="/pagina3/pagina6" component={Pagina6} />
                </Transition> */}
            </div>
        );
    }
}
