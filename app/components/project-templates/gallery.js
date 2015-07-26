// dependecies --------------------------------------------------

import React from 'react';

// component setup ---------------------------------------------

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {galleryHeight: 0};
    }

// life cycle events --------------------------------------------

    render() {
    	let project = this.props.project;
        let imageHeight = this.state.galleryHeight - 15;

        let images;
        if (project.images.length > 1) {
        	images = project.images.map(function (image, index) {
        		return (
                    <div className="image-wrap" key={index}>
                        <img height={imageHeight} src={image.original} />
                    </div>
                );
        	});
        } else {
            images = (
                <div className="single-image-wrap">
                    <img height={imageHeight} src={project.images[0].original} />
                </div>
            );
        }

        return (
            <div className="gallery" ref="gallery">
                {images}
            </div>
        );
    }

    componentDidMount() {
        this.updateDimensions();
        this.resizeEvent = this.updateDimensions.bind(this);
        window.addEventListener("resize", this.resizeEvent);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeEvent);
    }

// custom methods -----------------------------------------------

    updateDimensions() {
        let galleryHeight = this.refs.gallery.getDOMNode().offsetHeight;
        this.setState({galleryHeight: galleryHeight});
    }
}
