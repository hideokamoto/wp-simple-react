'use strict';
jest.unmock('../../../src/components/modules/excerpt');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Excerpt from '../../../src/components/modules/excerpt';

describe('Excerpt HTML Tag Check', () => {
	it('should render Excerpt component', () => {
		TestUtils.renderIntoDocument(<Excerpt />);
	})

	it ( 'Should habe excerpt props', () => {
		var testHtml = "<p>TestExcerpt</p>";
		var apiDataMock = {
			excerpt: {
				rendered: testHtml
			}
		};
		var excerpt = TestUtils.renderIntoDocument(<Excerpt children={apiDataMock} />);
		expect( excerpt.props.children.excerpt.rendered ).toBe(testHtml);
	})
})
