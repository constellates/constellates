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

        return (
            <html lang="en">
                <head>
                    <title>{title}</title>
                    <base href="/"></base>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="Cache-Control" content="no-cache" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta charSet="utf8" />
                    <link rel="icon" href="favicon.png" sizes="32x32" />
                    <link rel="stylesheet" type="text/css" href="app.css" media="all" />
                </head>
                <body>
                    <div id="app">
                        <RouteHandler />
                        <Link to="menu" className='menu-link'></Link>
                    </div>
                </body>
                <script src="bundle.js"></script>
            </html>
        );
    }
}
