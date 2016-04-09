'use strict';
jest.unmock('../../../src/components/modules/content');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Content from '../../../src/components/modules/content';

describe('Content HTML Tag Check', () => {
	it('should render Content component', () => {
		TestUtils.renderIntoDocument(<Content />);
	})

	it ( 'Should habe content props', () => {
		var testHtml = "<p>TestContent</p>";
		var apiDataMock = {
			content: {
				rendered: testHtml
			}
		};
		var content = TestUtils.renderIntoDocument(<Content children={apiDataMock} />);
		expect( content.props.children.content.rendered ).toBe(testHtml);
	})
})
