import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
        // this.rotaAcao = {
        //     "rodrigo-mello": {
        //         login: {
        //             vindo: { transPage: true },
        //             indo: { transPage: true }
        //         }
        //     }
        // };
    }
    render() {
        var animacao = false;

        // if (this.props.location.pathname == "/rodrigo-mello") {
        // }
        animacao = true;

        // global.animacao = !global.animacao;
        // animacao = global.animacao;

        console.log("animacao");
        console.log(animacao);

        console.log("global.historico");
        console.log(global.historico);
        console.log("this.props.location.pathname");
        console.log(this.props.location.pathname);

        var children = "";
        console.log("if");
        if (this.props) {
            if (animacao) {
                console.log("animacao true");
                children =
                    <TransitionGroup
                        component="div"
                        transitionName="swipe"
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={800}
                        >
                            <Route {...this.props} key={this.props.location.pathname} />
                    </TransitionGroup>;
            } else {
                console.log("animacao false");
                children = <Route {...this.props} />;
                // children = "nada";
            }
        } else {
            console.log("sem this.props");
        }
        return (
            <div>
                { children }
            </div>
        );
    }
}
