// dependencies -----------------------------------------------------------

import React from 'react';
import {RouteHandler} from 'react-router';

// component setup --------------------------------------------------------

export default class App extends React.Component {

    static get propTypes() {
        return {
            path: React.PropTypes.string
        };
    }

// life cycle events ------------------------------------------------------

    render() {
        const {path} = this.props;
        const title = `${path}`;
        return (
            <html lang="en">
                <head>
                <title>{title}</title>
                <base href="/"></base>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Cache-Control" content="no-cache" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta charSet="utf8" />
                </head>
                <body>
                    <div id="app" className="container">
                    <RouteHandler />
                    </div>
                </body>
                <script src="bundle.js"></script>
            </html>
        );
    }
}
