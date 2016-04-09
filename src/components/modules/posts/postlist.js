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
		var POST = new V2Posts( 'http://wp-kyoto.net/' );
		POST.getPostList( this, this.props.query );
	}

	componentDidMount() {
		this.getPostList();
	}

	render() {
		var i = 0;
		var listClassName = this.state.listClassName;
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
		return (
			<div className={this.state.rowClassName}>
				{childNodes}
			</div>
		)
	}
}
PostList.getDefaultProps = {
	query: {}
}
