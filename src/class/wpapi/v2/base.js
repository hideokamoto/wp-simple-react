var request = require('superagent');

export default class V2wpapi {
	constructor(url) {
		this.url = url;
	}

	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	getUrl() {
		return this._url;
	}

	callApi( self ) {
		var api_url = this._url + '/wp-json/wp/v2/';
		request.get( api_url )
			.end( function( err, response) {
				self.setState( { data: response.body } );
			});
	}

	getRootData( self ) {
		this.callApi( self );
		return true;
	}
}
