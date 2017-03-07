import React, { Component } from "react";
import { Link } from "react-router";

export default class extends Component {
    componentWillMount() {
        global.elist.transName = "swipe-left";
    }
    render() {
        return (
            <div className="tela">
                <h1>Acesso!</h1>
                <li><Link to="/tag">Entrar</Link></li>
            </div>
        );
    }
}
