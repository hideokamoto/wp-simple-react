'use strict';
import React from 'react';
export default class Title extends React.Component {

	constructor(props) {
		super(props);
	}

	getTitleText() {
		var titleText = '';
		if ( this.props.title ) {
			titleText = this.props.title.rendered
		} else if ( this.props.children ) {
			titleText = this.props.children;
		}
		return titleText;
	}

	getTitleMarkNodes() {
		var titleText = this.getTitleText();
		var titleNodes = '';
		if ( ! this.props.markupTag ) {
			titleNodes = <p>{titleText}</p>;
		} else {
			titleNodes = <this.props.markupTag>{titleText}</this.props.markupTag>;
		}
		return titleNodes;
	}

	render() {
		var titleNodes = this.getTitleMarkNodes();
		return titleNodes;
	}
}
