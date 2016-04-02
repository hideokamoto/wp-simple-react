'use strict';
jest.unmock('../../../src/components/modules/title');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Title from '../../../src/components/modules/title';

describe('Title HTML Tag Check', () => {
	var supportedTags = {
		h1: true,
		h2: true,
		h3: true,
		h4: true,
		h5: true,
		h6: true
	};

	Object.keys( supportedTags ).forEach( function( tag ) {
		if ( this[tag] ) {
			it('Should Be use '+ tag + ' tags', () => {
				const title = TestUtils.renderIntoDocument(
					<Title markupTag={tag} />
				);
				const titleNodes = TestUtils.scryRenderedDOMComponentsWithTag(title,tag);
				expect(titleNodes[0]).not.toBeUndefined();
			});
		}
	}, supportedTags );



});
