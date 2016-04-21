import React from 'react';
import soundcloud from '../libs/soundcloud';

export default class Contact extends React.Component {

	constructor (props) {
        super(props);
        this.state = {
            songs: []
        };
    }

	componentDidMount() {
		soundcloud.getSongs((songs) => {
			this.setState({songs})
		});
	}

    render() {
    	let songs = this.state.songs.map((song, index) => {
    		let embedOptions = {
                'url':           song.uri,
                'color':         'ff5500',
                'auto_play':     false,
                'hide_related':  false,
                'show_comments': true,
                'show_user':     true,
                'show_reposts':  false,
                'visual':        false
            };
            this._embedUrl(embedOptions);
    		return (
                <div className="song">
        			<iframe
                        key={song.uri}
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        src={this._embedUrl(embedOptions)}>
                    </iframe>
                </div>
    		);
    	});
        return (
        	<div className="music">
	            {songs}
	        </div>
        );
    }

    _embedUrl(options) {
        let url = 'https://w.soundcloud.com/player/?'
        let count = 0;
        for (let option in options) {
            if (count > 0) {url += '&amp;'}
            url += option + '=' + options[option];
            count++;
        }
        return url;
    }
}
