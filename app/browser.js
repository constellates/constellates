import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, (Handler, info) => {
	ga('set', 'page', info.path);
	ga('send', 'pageview');
	React.render(<Handler />, document.getElementById('app'));
});
