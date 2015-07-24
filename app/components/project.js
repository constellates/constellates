// dependecies --------------------------------------------------

import React   from 'react';
import {State} from 'react-router';
import request from '../libs/request';
import mixin   from 'es6-react-mixins';

import Gallery from './project-templates/gallery';
import Video from './project-templates/video';

// component setup ---------------------------------------------

export default class Project extends mixin(State) {

	constructor (props) {
        super(props);
        this.state = {
            project: {}
        };
    }

// life cycle events --------------------------------------------

	componentDidMount () {
		let params = this.getParams();
        let self = this;
        request.get('projects/' + params.projectId, function (res) {
            self.setState({project: res});
        });
    }

    render() {
    	let project = this.state.project;

        // load component for template
        let template;
        switch (project.template) {
            case 'gallery.html':
                template = <Gallery project={project} />;
                break;
            case 'video.html':
                template = <Video project={project} />;
                break;
        }

        return (
            <div>
            	<h1>{project.title}</h1>
            	<h2>template: {project.template}</h2>
                {template}
            </div>
        );
    }
}
