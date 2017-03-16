import React, { Component } from "react";
import Link from "./Link";

export default class extends Component {
    componentWillMount() {
        // global.elist.transPage = true;
        // console.log("login global.elist.transPage");
        // console.log(global.elist.transPage);
    }
    render() {
        return (
            <div className="tela">
                <h1>Acesso!</h1>
                <Link to={ global.elist.usuario.url } >Entrar</Link>
            </div>
        );
    }
}
