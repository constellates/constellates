import React from 'react';

export default class Video extends React.Component {

    constructor() {
        super();
        this.state = {
            frameHeight: 0,
            frameWidth: 0
        };
    }

    render() {
    	let vimeoId     = this.props.project.vimeoId;
        let frameHeight = this.state.frameHeight;
        let frameWidth  = this.state.frameWidth;
        let blurb       = this.props.project.blurb;

        // calculate frame size
        let width  = this.state.frameWidth - 30;
        let height = width * 281 / 500;

        return (
            <div className="video" ref="frame">
            	<iframe src={"https://player.vimeo.com/video/" + vimeoId}
                        width={width}
                        height={height}
                        frameBorder="0"
                        allowFullScreen />
                {this._blurb(blurb)}
            </div>
        );
    }

    componentDidMount() {
        this._updateDimensions();
        this.resizeEvent = this._updateDimensions.bind(this);
        window.addEventListener("resize", this.resizeEvent);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeEvent);
    }

// template methods ---------------------------------------------

    _blurb(text) {
        if (text) {
            return <div className="blurb">{text}</div>;
        }
    }

// custom methods -----------------------------------------------

    _updateDimensions() {
        let frame       = this.refs.frame.getDOMNode();
        let frameHeight = frame.offsetHeight;
        let frameWidth  = frame.offsetWidth;
        this.setState({frameHeight, frameWidth});
    }

}
