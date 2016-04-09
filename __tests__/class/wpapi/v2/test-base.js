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
		spyOn( WP, "callApi").and.callFake(function(url) {
		  return {
		    data: 'hoge'
		  }
		});
		expect( WP.getRootData()).toBeTruthy();
	});

	//@TODO:Test SetState from superagent

});
