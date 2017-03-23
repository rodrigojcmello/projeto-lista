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
            "/pagina2": { transitionName: "transition-slide-right" },
            "/pagina3": { transitionName: "transition-slide-right" },
            "/pagina4/pagina5": { transitionName: "transition-slide-right" }
        };
        rota["/pagina2"] = {
            "/pagina1": { transitionName: "transition-slide-left" },
            "/pagina3": { transitionName: "transition-slide-right" },
            "/pagina4/pagina5": { transitionName: "transition-slide-right" }
        };
        rota["/pagina3"] = {
            "/pagina1": { transitionName: "transition-slide-left" },
            "/pagina2": { transitionName: "transition-slide-left" },
            "/pagina4/pagina5": { transitionName: "transition-slide-right" }
        };
        rota["/pagina4"] = {
            "/pagina1": { transitionName: "transition-slide-left" },
            "/pagina2": { transitionName: "transition-slide-left" },
            "/pagina3": {
                transitionName: "transition-slide-left",
                transition: false
            }
        };

        var transitionName = "transition-none";
        var transitionEnterTimeout = 1;
        var transitionLeaveTimeout = 2;

        var pathname = this.props.location.pathname;
        var historico = global.historico;
        if (rota[pathname]) {
            if (typeof historico != "undefined") {
                if (typeof rota[pathname][historico] != "undefined") {
                    transitionName = rota[pathname][historico].transitionName;
                } else {
                    var p, pos = historico.indexOf("/");
                    while (pos > -1) {
                        p = pos;
                        pos = historico.indexOf("/", pos + 1);
                    }
                    if (p > 0) {
                        transitionName = rota[pathname][historico.substring(0, p)].transitionName;
                    }
                }

                if (typeof rota[pathname][historico] != "undefined") {
                    if (typeof rota[pathname][historico].forceRedirect != "undefined") {
                        if (rota[pathname][historico].forceRedirect) {
                            // global.transition = false;
                            global.transition = true;
                        }
                    }
                }
            }
        }

        global.transition = true;
        transitionName = "transition-slide-left";

        var children;

        if (global.transition) {
            children = <TransitionGroup
                component="div"
                transitionName={transitionName}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={501}
                >
                    <Route {...this.props} key={pathname} />
            </TransitionGroup>;
        } else {
            children = <Route {...this.props} />;
        }

        return (
            <div>
                { children }
            </div>
        );
    }
}
