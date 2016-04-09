'use strict';
import React from 'react';
export default class Excerpt extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var excerpt = 'Loading';
		if ( this.props.children ) {
			if ( this.props.children.excerpt ) {
				if ( this.props.children.excerpt.rendered ) {
					excerpt = this.props.children.excerpt.rendered;
				} else {
					excerpt = this.props.children.excerpt;
				}
			} else {
				excerpt = this.props.children;
			}
		}
		return (
			<div dangerouslySetInnerHTML={{__html: excerpt}}></div>
		)
	}
}
Excerpt.getDefaultProps = {
	data: {
		rendered: 'Loading'
	}
}
