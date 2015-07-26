// dependecies --------------------------------------------------

import React   from 'react';
import {State} from 'react-router';
import api     from '../libs/api';
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

	componentWillMount () {
		let params = this.getParams();
        let self = this;
        api.getProject(params.projectId, function (project) {
            self.setState({project: project});
        });
    }

    componentWillUnmount() {
        this.setState({project: {}});
    }

    render() {
    	let project = this.state.project;

        // load component for template
        let template;
        switch (project.template) {
            case 'gallery':
                template = <Gallery project={project} id="template" />;
                break;
            case 'video':
                template = <Video project={project} id="template" />;
                break;
        }

        return (
            <div>
                {template}
                <div className="project-description"><div>{project.title}</div></div>
            </div>
        );
    }
}
