import React, { Component } from "react";
import Link from "./Link";

export default class extends Component {
    componentWillMount() {
        // global.transPage = true;
        // console.log("login global.transPage");
        // console.log(global.transPage);
    }
    render() {
        return (
            <div className="tela">
                <h1>Acesso!</h1>
                <Link to={ global.usuario.url }>Entrar</Link>
            </div>
        );
    }
}
