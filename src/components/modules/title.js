'use strict';
import React from 'react';
export default class Title extends React.Component {

	constructor(props) {
		super(props);
	}

	getTitleText() {
		var titleText = '';
		if ( this.props.children ) {
			if ( this.props.children.title ) {
				titleText = this.props.children.title.rendered;
			} else {
				titleText = this.props.children;
			}
		}
		return titleText;
	}

	getClassName() {
		if ( this.props.className ) {
			return this.props.className;
		} else {
			return 'entry-title';
		}
	}

	getTitleMarkNodes() {
		var titleText = this.getTitleText();
		var className = this.getClassName();
		var titleNodes = '';
		if ( ! this.props.markupTag ) {
			titleNodes = <p className={className} id={this.props.id}>{titleText}</p>;
		} else {
			titleNodes = <this.props.markupTag className={className} id={this.props.id}>{titleText}</this.props.markupTag>;
		}
		return titleNodes;
	}

	render() {
		var titleNodes = this.getTitleMarkNodes();
		return titleNodes;
	}
}
