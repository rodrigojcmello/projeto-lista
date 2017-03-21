import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <div className="full screen">
                <h1>Página 3</h1>
                <Link to="/pagina1">Página 1</Link>
                <Link to="/pagina2">Página 2</Link>
                <Link to="/pagina4">Página 4</Link>
            </div>
        );
    }
}
