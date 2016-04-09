'use strict';
jest.unmock('../../../../src/class/wpapi/v2/base');
import V2wpapi from '../../../../src/class/wpapi/v2/base.js';

describe('Test for base class about WP API v2', () => {
	var WP;
	var api_url = 'http://api.wp-app.org/';
	beforeEach( () => {
		WP = new V2wpapi( api_url );
	});

	it( 'set root url', () => {
		expect( WP.getUrl() ).toEqual( api_url );
	});

	it( "Should getRootData() return true.", () => {
		spyOn( WP, "get").and.callFake(function(url) {
		  return {
		    data: 'hoge'
		  }
		});
		expect( WP.getRootData()).toBeTruthy();
	});

	it ( "Should add get query to api url", () => {
		var testQuery = {
			type: 'posts',
			per_page: 1,
		};
		WP.setGetQuery( testQuery );
		expect( WP.getQuery() ).toEqual( 'posts?per_page=1&_embed' );
	});

	it ( "Should add post query to api url", () => {
		var testQuery = {
			type: 'posts',
			per_page: 1,
		};

		WP.setQuery( testQuery );
		expect( WP.getQuery() ).toEqual( {
			path: testQuery.type,
			query: testQuery
		} );
	});
	//@TODO:Test SetState from superagent

});
