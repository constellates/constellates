import React from 'react';

export default class Video extends React.Component {

    constructor() {
        super();
        this.state = {galleryHeight: 0};
    }

    render() {
    	let vimeoId = this.props.project.vimeoId;
        let height = this.state.galleryHeight - 10;
        let width = height * 500 / 281;
        return (
            <div className="gallery" ref="gallery">
                <div className="single-image-wrap">
                	<iframe src={"https://player.vimeo.com/video/" + vimeoId} width={width} height={height} frameBorder="0" allowFullScreen></iframe>
                </div>
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
