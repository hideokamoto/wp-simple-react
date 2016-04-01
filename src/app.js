'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PostTitle from './test';

class Post extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Title</h3>
				<PostTitle />
			</div>
		);
	}
}
ReactDOM.render(
	<Post />,
	document.getElementById('app')
)
