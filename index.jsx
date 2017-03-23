import {
    HashRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import React from 'react';
import { render } from 'react-dom';

import CSSTransitionGroup from 'react-addons-css-transition-group';
import { wrapSwitch } from 'rrc';

const CSSTransitionSwitch = wrapSwitch(CSSTransitionGroup);

const Home = () => <div className='view'>Home</div>;

const Users = () => <div className='view'>Users</div>;
const Profile = () => <div className='view'>Profile</div>;

require('./componente/estilo.css');

const App = ({ location }) => (
    <CSSTransitionSwitch
        transitionName='slide'
        transitionEnterTimeout={500}
        transitionExitTimeout={500}
        location={location}
        routes={[
            { path: '/', exact: true, component: Home },
            { path: '/user', component: User }
        ]}
    />
);

const User = ({ match, location }) => (
    <div>
        navbar
        <CSSTransitionSwitch
            transitionName='slide'
            transitionEnterTimeout={500}
            transitionExitTimeout={500}
            component='div'
            location={location}
            routes={[
                { path: match.url, exact: true, component: Users },
                { path: `${match.url}/:username`, component: Profile }
            ]}
        />
    </div>
);

render((
    <HashRouter>
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user'>Users</Link></li>
                    <li><Link to='/user/10'>10</Link></li>
                </ul>
            </nav>
            <Route component={App} />
        </div>
    </HashRouter>
), document.getElementById('root'));
