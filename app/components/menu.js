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
            let style = {backgroundImage: 'url(' + project.images[0].original + ')'};
            return (
                <li key={index}>
                    <div className='project-tile'>
                        <div className='dummy'></div>
                        <Link to="project" params={{projectId: project.url}} className='content' style={style}>
                            <div className="project-title">{project.title}</div>
                        </Link>
                    </div>
                </li>
            );
        });

        return (
            <nav>
                <div className='project-tile-container'>
                    <ul>{projects}</ul>
                </div>
                <nav className="nav-bar">
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
