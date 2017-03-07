import React, { Component } from "react";
import { Link } from "react-router";

export default class extends Component {
    render() {
        return (
            <div className="tela">
                <h1>Configuração</h1>
                <li><Link to="/tag">tag</Link></li>
            </div>
        );
    }
}
