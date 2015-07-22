import React from 'react';

export default class Menu extends React.Component {
    render() {
        const style = {
            title: {
                fontFamily: "'Playfair Display SC', serif"
            }
        };
        return (
            <nav id="nav-menu">

                <div id="project-tile-container">
                    list of projects
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
