//@TODO:Show Post List

'use strict';
jest.unmock('../../../../src/components/modules/posts/postlist');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PostList from '../../../../src/components/modules/posts/postlist.js';

describe('Test for PostList class about WP API v2', () => {
	var api_url = 'http://api.wp-app.org/';

	it('should render PostList component', () => {
		TestUtils.renderIntoDocument(<PostList />);
	})

	it ( 'Should import api url', () => {
		var content = TestUtils.renderIntoDocument(
			<PostList
				path={api_url}/>
		);
		expect( content.props.path ).toBe(api_url);
	})

	it ( 'Should import query', () => {
		var query = {
			per_page : 5,
			filter: {
				category_name: 'wordpress'
			}
		};
		var content = TestUtils.renderIntoDocument(
			<PostList
				query={query}/>
		);
		expect( content.props.query ).toBe( query );
	});

	it ( 'Should import rowClassName', () => {
		var content = TestUtils.renderIntoDocument(
			<PostList
				rowClassName='row'/>
		);
		expect( content.props.rowClassName ).toBe( 'row' );
	});

	it ( 'Should import listClassName', () => {
		var content = TestUtils.renderIntoDocument(
			<PostList
				listClassName='cont'/>
		);
		expect( content.props.listClassName ).toBe( 'cont' );
	});

});
