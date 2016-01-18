// dependencies -----------------------------------------------------------

import React                from 'react';
import {RouteHandler, Link} from 'react-router';

// component setup --------------------------------------------------------

export default class App extends React.Component {

    static get propTypes() {
        return {
            path: React.PropTypes.string
        };
    }

// life cycle events ------------------------------------------------------

    render() {
        let path = this.props.path.split('/');
            path = path[path.length - 1];
            path = path.replace(/-/g, ' ');
        const title = path ? path : 'constellates';

        let menuClass = path ? 'menu-link' : 'menu-link disabled';

        return (
            <div>
                <RouteHandler />
                <Link to="menu" className={menuClass}></Link>
            </div>
        );
    }
}
