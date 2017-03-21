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
            transitionEnterTimeout: 5000,
            transitionLeaveTimeout: 5001,
            origem: {
                "/pagina2": "transition-slide-right",
                "/pagina3": "transition-slide-right"
            }
        };
        rota["/pagina2"] = {
            transitionEnterTimeout: 5000,
            transitionLeaveTimeout: 5001,
            origem: {
                "/pagina1": "transition-slide-left",
                "/pagina3": "transition-slide-right",
                "/pagina3/pagina4": "transition-slide-right"
            }
        };
        rota["/pagina3"] = {
            transitionEnterTimeout: 5000,
            transitionLeaveTimeout: 5001,
            origem: {
                "/pagina1": "transition-slide-left",
                "/pagina2": "transition-slide-left"
            }
        };

        var transitionName = "transition-none";
        var transitionEnterTimeout = 1;
        var transitionLeaveTimeout = 2;

        var children = "";

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


            if (global.historico[0] == "/pagina2" && pathname == "/pagina3") {
                global.transitionPage = false;
                console.log("FALSOOOOO");
            } else if (global.historico[0] == "/pagina3" && pathname == "/pagina2") {
                global.transitionPage = true;
                console.log("ANIMOU 1");
            } else {
                global.transitionPage = true;
                console.log("ANIMOU 2");
            }

            var teste = "teste";
            if (global.transitionPage) {
                teste = "123";
                children = <TransitionGroup
                    component="div"
                    transitionName={transitionName}
                    transitionEnterTimeout={transitionEnterTimeout}
                    transitionLeaveTimeout={transitionLeaveTimeout}
                >
                    <Route {...this.props} key={pathname} />
                </TransitionGroup>;
            } else {
                children = <Route {...this.props} key={pathname} />;
            }


        }



        return (
            <div className={teste}>
                { children }
            </div>
        );
    }
}
