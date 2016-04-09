'use strict';
import React from 'react';
export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var content = 'Loading';
		if ( this.props.children ) {
			if ( this.props.children.content ) {
				if ( this.props.children.content.rendered ) {
					content = this.props.children.content.rendered;
				} else {
					content = this.props.children.content;
				}
			} else {
				content = this.props.children;
			}
		}
		return (
			<div dangerouslySetInnerHTML={{__html: content}}></div>
		)
	}
}
Content.getDefaultProps = {
	data: {
		rendered: 'Loading'
	}
}
