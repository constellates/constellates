import React from 'react';

export default class Video extends React.Component {
    render() {
    	let vimeoId = this.props.project.vimeoId;
        return (
            <div>
            	<iframe src={"https://player.vimeo.com/video/" + vimeoId} width="500" height="281" frameBorder="0" allowFullScreen></iframe>
            	<p>
            		<a href={"https://vimeo.com/101882895" + vimeoId}>wood carry</a> from <a href="https://vimeo.com/constellates">constellates</a> on <a href="https://vimeo.com">Vimeo</a>.
        		</p>
            </div>
        );
    }
}
