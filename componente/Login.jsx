import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
    componentWillMount() {
        global.elist.transPage = true;
    }
    render() {
        return (
            <div className="tela">
                <h1>Acesso!</h1>
                <Link to={ global.elist.usuario.url }>Entrar</Link>
            </div>
        );
    }
}
