import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift.js';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });
});