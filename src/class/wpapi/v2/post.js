var request = require('superagent');
import V2wpapi from './base';

export default class V2Post extends V2wpapi {
	constructor(props) {
		super(props);
	}

	createPostQuery( query ) {
		query['type'] = 'posts';
		return query;
	}

	getPostList( self, query ) {
		var query = this.createPostQuery( query );
		this.setGetQuery( query );
		this.get( self );
		return true;
	}

}
