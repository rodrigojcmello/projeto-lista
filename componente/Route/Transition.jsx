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
                
                // if (true) {
                //     children = <TransitionGroup
                //         component="div"
                //         transitionName={transitionName}
                //         transitionEnterTimeout={transitionEnterTimeout}
                //         transitionLeaveTimeout={transitionLeaveTimeout}
                //     >
                //         <Route {...this.props} key={pathname} />
                //     </TransitionGroup>;
                // } else {
                // }
                children = <Route {...this.props} key={pathname} />;


                transitionEnterTimeout = rota[pathname].transitionEnterTimeout;
                transitionLeaveTimeout = rota[pathname].transitionLeaveTimeout;

                console.log("estou em: " + pathname);
                console.log("estava em: " + global.historico[0]);
                console.log("-----");
            }
        }



        return (
            <div>
                { children }
            </div>
        );
    }
}
