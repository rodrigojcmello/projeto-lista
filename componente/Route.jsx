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

        rota = <Route {...this.props} />;

        console.log("this.props.location");
        console.log(this.props);

        // if (typeof this.props.location != "undefined") {
            // var pathname = this.props.location.pathname;
            var pathname = this.props.path;
            console.log("pathname");
            console.log(this.props.path);
            if (rota[pathname]) {
                transitionEnterTimeout = rota[pathname].transitionEnterTimeout;
                transitionLeaveTimeout = rota[pathname].transitionLeaveTimeout;

                console.log("estou em: " + pathname);
                console.log("estava em: " + global.historico[0]);
                console.log("-----");

            }
            console.log(0);
        // } else {
        //     console.log(1);
        // }
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
