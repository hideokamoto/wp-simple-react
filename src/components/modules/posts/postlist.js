'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import V2Posts from '../../../class/wpapi/v2/post';

export default class PostList extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: []
		};
		this.setDefaultClassname( props );
	}

	setDefaultClassname( props ) {
		if ( props.rowClassName ) {
			this.state.rowClassName = props.rowClassName;
		} else {
			this.state.rowClassName = 'post-list';
		}
		if ( props.listClassName ) {
			this.state.listClassName = props.listClassName;
		} else {
			this.state.listClassName = 'entry-content';
		}
	}

	getPostList() {
		var POST = new V2Posts( this.props.path );
		POST.getPostList( this, this.props.query );
	}

	componentDidMount() {
		this.getPostList();
	}

	createChildNodes() {
		var listClassName = this.state.listClassName;
		var i = 0;
		var childNodes = this.state.data.map( function ( post ) {
			var childNode = [];
			Object.keys( this ).forEach( function( key ) {
				var newProps = Object.assign(
					{},
					this[key].props,
					{
						children: post
					}
				);
				childNode[key] = Object.assign(
					{},
					this[key],
					{
						props: newProps
					}
				);
			}, this );
			var returnNode = <article key={i} className={listClassName}>{childNode}</article>;
			i++;
			return returnNode;
		}, this.props.children );
		return childNodes;
	}

	render() {
		if ( this.props.path ) {
			var childNodes = this.createChildNodes();
		} else {
			var childNodes = <p>Set Api url</p>;
		}
		return (
			<div className={this.state.rowClassName}>
				{childNodes}
			</div>
		)
	}
}
PostList.getDefaultProps = {
	query: {},
	path: false
}
