'use strict';
jest.unmock('../../../src/class/wpapi/v2');
import V2wpapi from '../../../src/class/wpapi/v2';

describe('Content HTML Tag Check', () => {
	var WP;
	var api_url = 'http://api.wp-app.org/';
	beforeEach( () => {
		WP = new V2wpapi( api_url );
	});

	it( 'set root url', () => {
		expect( WP.getUrl() ).toEqual( api_url );
	})

	it( "create spy object", () => {
		var WPSpy = spyOn( WP, "getRootData")
	});

	it( "spy run", () => {
		spyOn( WP, "getRootData").and.returnValue(true);
		expect( WP.getRootData()).toEqual(true);
	});

	it( "spy run", () => {
		spyOn( WP, "getRootData").and.callFake(function(url) {
		  return {
		    data: 'hoge'
		  }
		});
		expect( WP.getRootData()).toEqual({
		  data: 'hoge'
		});
	});


	/*
	it('should render Content component', () => {

		it( "run", () => {
			spyOn( WP, "getRootData").and.callThrough();
			var test = WP.getRootData();
				test.then( function(response) {
					console.log(response);
				})
				.catch( function(error) {
					console.dir(error);
				});

		});
	});*/
});
