import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <div className="full screen">
                <h1>Página 1</h1>
                <li><Link to="/pagina1">Página 1</Link></li>
                <li><Link to="/pagina2">Página 2</Link></li>
                <li><Link to="/pagina3">Página 3</Link></li>
            </div>
        );
    }
}
