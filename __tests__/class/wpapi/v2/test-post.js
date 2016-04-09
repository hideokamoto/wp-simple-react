'use strict';
jest.unmock('../../../../src/class/wpapi/v2/post');
jest.unmock('../../../../src/class/wpapi/v2/base');
import V2Posts from '../../../../src/class/wpapi/v2/post.js';

describe('Test for posts class about WP API v2', () => {
	var POST;
	var api_url = 'http://api.wp-app.org/';
	beforeEach( () => {
		POST = new V2Posts( api_url );
	});

	it( 'set root url', () => {
		expect( POST.getUrl() ).toEqual( api_url );
	});

	it ( "Should add get query with filter to api url", () => {
		var testQuery = {
			type: 'posts',
			per_page: 1,
			filter: {
				category_name: 'category'
			}
		};
		POST.setGetQuery( testQuery );
		expect( POST.getQuery() ).toEqual( "posts?per_page=1&filter[category_name]=category&" );
	});

});
