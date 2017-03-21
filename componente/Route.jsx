import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rota = {};
        rota["/pagina1"] = {
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 501,
            origem: {
                "/pagina2": "transition-slide-right",
                "/pagina3": "transition-slide-right"
            }
        };
        rota["/pagina2"] = {
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 501,
            origem: {
                "/pagina1": "transition-slide-left",
                "/pagina3": "transition-slide-right",
                "/pagina3/pagina4": "transition-slide-right"
            }
        };
        rota["/pagina3"] = {
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 501,
            origem: {
                "/pagina1": "transition-slide-left",
                "/pagina2": "transition-slide-left"
            }
        };

        var transitionName = "transition-none";
        var transitionEnterTimeout = 1;
        var transitionLeaveTimeout = 2;

        var pathname = this.props.location.pathname;
        if (rota[pathname]) {
            if (typeof global.historico != "undefined") {
                if (typeof rota[pathname].origem[global.historico] != "undefined") {
                    transitionName = rota[pathname].origem[global.historico];
                }
            }
            transitionEnterTimeout = rota[pathname].transitionEnterTimeout;
            transitionLeaveTimeout = rota[pathname].transitionLeaveTimeout;

            console.log("estou em: " + pathname);
            console.log("estava em: " + global.historico);
            console.log("-----");
        }

        return (
            <TransitionGroup
                component="div"
                transitionName={transitionName}
                transitionEnterTimeout={transitionEnterTimeout}
                transitionLeaveTimeout={transitionLeaveTimeout}
                >
                    <Route {...this.props} key={pathname} />
            </TransitionGroup>
        );
    }
}
