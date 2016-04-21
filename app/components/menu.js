// dependecies --------------------------------------------------

import React   from 'react';
import {Link}  from 'react-router';
import api     from '../libs/api';

// component setup ---------------------------------------------

export default class Menu extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: []
        };
    }

// life cycle events --------------------------------------------

    componentWillMount () {
        let self = this;
        api.getProjects(function (projects) {
            self.setState({projects: projects});
        });
    }

    render() {

        let projects = this.state.projects.map(function (project, index) {
            let style = {backgroundImage: 'url(' + project.images[0].original + ')'};
            return (
                <li key={index}>
                    <div className='project-tile'>
                        <div className='tile-space-holder'></div>
                        <Link to="project" params={{projectId: project.url}} className='content' style={style}>
                            <div className="project-overlay">
                                <div className="project-title">{project.title}</div>
                            </div>
                        </Link>
                    </div>
                </li>
            );
        });

        return (
            <nav>
                <div className='project-tile-container'>
                    <ul className="clear-fix">{projects}</ul>
                </div>
                <nav className="nav-bar">
                    <div>
                        <Link to="about">about</Link>
                    </div>
                    <div>
                        <a href="http://blog.constellates.com">blog</a>
                    </div>
                    <div>
                        <Link to="music">music</Link>
                    </div>

                </nav>
            </nav>
        );
    }
}
