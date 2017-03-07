import React, { Component } from "react";
import { Link } from "react-router";

export default class extends Component {
    componentWillMount() {
        global.elist.transName = "swipe-right";
    }
    render() {
        return (
            <div className="tela">
                <h1>2 Tarefa!</h1>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/login">Voltar</Link></li>
                <li><Link to="/login">Voltar</Link></li>
            </div>
        );
    }
}
