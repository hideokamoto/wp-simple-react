var request = require('superagent');

export default class V2wpapi {
	constructor(url) {
		this.url = url;
		this.query = null;
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

	setGetQuery( query ) {
		var query_path = query.type + '?';
		Object.keys( query ).forEach( function( key ) {
			if ( 'type' != key ) {
				if ( typeof query[key] == 'object' ) {
					Object.keys( query[key] ).forEach( function( filter ) {
						query_path += key + '[' + filter + ']=' + this[filter] + "&";
					}, query[key] );
				} else {
					query_path += key + "=" + query[key] + "&";
				}
			}
		}, query );
		this.query = query_path + '_embed';
	}

	setQuery( query ) {
		this.query = {
			path: query.type,
			query: query
		}
	}

	getQuery() {
		return this.query;
	}

	get( self ) {
		var api_url = this._url + '/wp-json/wp/v2/';
		if ( this.query ) {
			api_url += this.query;
		}
		request.get( api_url )
			.end( function( err, response) {
				self.setState( { data: response.body } );
			});
	}

	getRootData( self ) {
		this.get( self );
		return true;
	}
}
