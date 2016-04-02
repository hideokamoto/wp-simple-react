'use strict';
import React from 'react';
export default class Title extends React.Component {

	constructor(props) {
		super(props);
	}

	getTitleMarkNodes() {
		var titleNodes = '';
		if ( ! this.props.markupTag ) {
			titleNodes = <p>Title1</p>;
		}
		if ( 'h1' == this.props.markupTag ) {
			titleNodes = <h1>Title2</h1>;
		} else if ( 'h2' == this.props.markupTag ) {
			titleNodes = <h2>Title2</h2>;
		} else if ( 'h3' == this.props.markupTag ) {
			titleNodes = <h3>Title2</h3>;
		} else if ( 'h4' == this.props.markupTag ) {
			titleNodes = <h4>Title2</h4>;
		} else if ( 'h5' == this.props.markupTag ) {
			titleNodes = <h5>Title2</h5>;
		} else if ( 'h6' == this.props.markupTag ) {
			titleNodes = <h6>Title2</h6>;
		} else {
			titleNodes = <p>Title3</p>;
		}
		return titleNodes;
	}

	render() {
		var titleNodes = this.getTitleMarkNodes();
		return titleNodes;
	}
}
