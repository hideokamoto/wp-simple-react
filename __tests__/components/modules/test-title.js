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

describe('Import Title Text', () => {
	it('Not set API data & set childNode', () => {
		var titleText = 'Title';
		const title = TestUtils.renderIntoDocument(
			<Title>{titleText}</Title>
		);
		const titleNode = ReactDOM.findDOMNode(title);
		expect(titleNode.textContent).toEqual(titleText);
	});

	it('set API data', () => {
		var titleText = 'Title';
		var apiReturnMock = {
			title: {
				rendered: titleText
			}
		};
		const title = TestUtils.renderIntoDocument(
			<Title title={apiReturnMock.title} />
		);
		const titleNode = ReactDOM.findDOMNode(title);
		expect(titleNode.textContent).toEqual(titleText);
	});
});

describe('Title HTML ClassName Check', () => {
	it('Set ClassName', () => {
		var titleClass = 'sample';
		const title = TestUtils.renderIntoDocument(
			<Title className={titleClass}>Title</Title>
		);
		const titleNodes = TestUtils.scryRenderedDOMComponentsWithClass(title,titleClass);
		expect(titleNodes[0]).not.toBeUndefined();
	});
	it('Default ClassName', () => {
		const title = TestUtils.renderIntoDocument(
			<Title>Title</Title>
		);
		const titleNodes = TestUtils.scryRenderedDOMComponentsWithClass(title,'entry-title');
		expect(titleNodes[0]).not.toBeUndefined();
	});
});
