import React   from 'react';
import App     from './components/app';
import Menu    from './components/menu';
import Contact from './components/contact';
import About   from './components/about';
import Project from './components/project';
import Music from './components/music';
import {
  Route,
  DefaultRoute,
  NotFoundRoute
} from 'react-router';

// needed routes
// project /p/id

class Default extends React.Component {
	static willTransitionTo(transition) {
		transition.redirect('about');
	}
}

export default (
	<Route name="menu" handler={App} path="/">
		<Route name="contact" handler={Contact} />
		<Route name="about"   handler={About}   />
		<Route name="project" path="p/:projectId" handler={Project} />
		<Route name="music"   handler={Music}   />
		<DefaultRoute         handler={Menu}    />
		<NotFoundRoute        handler={Menu}    />
	</Route>
);
