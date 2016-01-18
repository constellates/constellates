import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, (Handler) => {
  React.render(<Handler path={window.location.pathname} />, document.getElementById('app'));
});
