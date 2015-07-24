import React from 'react';

export default class Video extends React.Component {
    render() {
    	console.log(this.props.project);
        return (
            <div>Video Component</div>
        );
    }
}
