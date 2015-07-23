// dependecies --------------------------------------------------

import React   from 'react';
import {Link}  from 'react-router';
import request from '../libs/request';

// component setup ---------------------------------------------

export default class Menu extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            projects: []
        };
    }

// life cycle events --------------------------------------------

    componentDidMount () {
        let self = this;
        request.get('projects', function (res) {
            self.setState({projects: res});
        });
    }

    render() {
        let projects = this.state.projects.map(function (project, index) {
            return (
                <li key={index}>
                    <Link to="project" params={{projectId: project.url}}>{project.title}</Link>
                </li>
            );
        });

        return (
            <nav id="nav-menu">
                <div id="project-tile-container">
                    <ul>{projects}</ul>
                </div>
                <nav id="nav-footer">
                    <div>
                        <a href="about">about</a>
                    </div>
                    <div>
                        <a href="contact">contact</a>
                    </div>
                </nav>
            </nav>
        );
    }
}
