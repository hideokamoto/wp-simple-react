'use strict';
import React from 'react';
export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if ( this.props.data ) {
			var content = this.props.data.rendered;
		} else {
			var content = 'Loading';
		}
		return (
			<article dangerouslySetInnerHTML={{__html: content}}></article>
		)
	}
}
Content.getDefaultProps = {
	data: {
		rendered: 'Loading'
	}
}
