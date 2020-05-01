import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils'
import Header from './Header.js';

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};


describe('Header Component', () => {
    let component = '';
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });
})