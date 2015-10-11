// dependencies -----------------------------------------

import express from 'express';
import React   from 'react';
import Router  from 'react-router';
import routes  from '../app/routes';
import path    from 'path';

// configure app ----------------------------------------

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.get('/favicon.ico', (req, res) => res.send(''));

app.use((req, res) => {
	Router.run(routes, req.path, (Handler) => {
		res.send('<!DOCTYPE html>' + React.renderToString(<Handler path={req.path} />));
	});
});

// serve ------------------------------------------------

app.listen(port, () => {
	console.log('listening...' + port);
});
