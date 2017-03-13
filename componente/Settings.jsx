import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <div className="tela">
                <h1>Settings</h1>
                <li><Link to="/">voltar para página</Link></li>
            </div>
        );
    }
}
