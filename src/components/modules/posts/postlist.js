'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import V2Posts from '../../../class/wpapi/v2/post';

export default class PostList extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: [],
			className: 'post-list'
		}
	}

	getPostList() {
		var POST = new V2Posts( 'http://wp-kyoto.net/' );
		var query = {
			per_page : 5
		};
		POST.getPostList( this, query );
	}

	componentDidMount() {
		this.getPostList();
	}

	render() {
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
			var returnNode = <article key={i}>{childNode}</article>;
			i++;
			return returnNode;
		}, this.props.children );
		return (
			<div className={this.state.className}>
				{childNodes}
			</div>
		)
	}

}
