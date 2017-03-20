import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-addons-css-transition-group";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rota = {};
        rota["/pagina3/pagina5"] = {
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 501,
            origem: {
                "/pagina3/pagina4": "transition-slide-left-with-navbar",
                "/pagina3/pagina6": "transition-slide-right-with-navbar"
            }
        };

        var transitionName = "transition-none";
        var transitionEnterTimeout = 1;
        var transitionLeaveTimeout = 2;

        if (typeof this.props.location != "undefined") {
            var pathname = this.props.location.pathname;
            if (rota[pathname]) {
                if (typeof global.historico[0] != "undefined") {
                    if (typeof rota[pathname].origem[global.historico[0]] != "undefined") {
                        transitionName = rota[pathname].origem[global.historico[0]];
                    } else {
                        var p, pos = global.historico[0].indexOf("/");
                        while (pos > -1) {
                            p = pos;
                            pos = global.historico[0].indexOf("/", pos + 1);
                        }
                        console.log("pos");
                        transitionName = rota[pathname].origem[global.historico[0].substring(0, p)];
                    }
                }
                transitionEnterTimeout = rota[pathname].transitionEnterTimeout;
                transitionLeaveTimeout = rota[pathname].transitionLeaveTimeout;

                console.log("estou em: " + pathname);
                console.log("estava em: " + global.historico[0]);
                console.log("-----");
            }
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
