'use strict';
jest.unmock('../../../src/class/wpapi/v2');
import V2wpapi from '../../../src/class/wpapi/v2';

describe('Content HTML Tag Check', () => {
	var WP;
	beforeEach( () => {
		WP = new V2wpapi('http://api.wp-app.org/');
	});

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
/*
spyOn(superagent, 'get').and.callFake(function(url) {
  return {
    end: function(cb) {
      //null for no error, and object to mirror how a response would look.
      cb(null, {body: data});
    }
  }
});
	});*/
});
