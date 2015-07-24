import React from 'react';

export default class Gallery extends React.Component {
    render() {
    	let project = this.props.project;

    	let images = project.images.map(function (image, index) {
    		return <img src={image.original} key={index} />;
    	});

        return (
            <div>
            	<ul>{images}</ul>
            </div>
        );
    }
}
