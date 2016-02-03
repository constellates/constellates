// dependencies -----------------------------------------------------------

import React                from 'react';
import {RouteHandler, Link, State} from 'react-router';

// component setup --------------------------------------------------------

let App = React.createClass({

    mixins: [State],

// life cycle events ------------------------------------------------------

    render() {
        let path = this.getPath();
        let title = path.split('/')[path.split('/').length - 1];
        document.title = title ? title : 'constellates';
        let menuClass = path != '/' ? 'menu-link' : 'menu-link disabled';

        return (
            <div>
                <RouteHandler />
                <Link to="menu" className={menuClass}></Link>
            </div>
        );
    }
})

export default App;