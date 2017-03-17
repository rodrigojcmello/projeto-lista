import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <div>
                Página <br />
                <Link to="/login">Login</Link> <br />
                <Link to={ global.usuario.url }>Usuário</Link> <br />
                <Link to="/settings">Settings</Link>
            </div>
        );
    }
}
