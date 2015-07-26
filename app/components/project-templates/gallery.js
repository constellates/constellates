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
        let height = this.state.galleryHeight - 10;

    	let images = project.images.map(function (image, index) {
    		return (
                <div className="image-wrap" key={index}>
                    <img height={height} src={image.original} />
                </div>
            );
    	});

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
