import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils'
import Photo from './Photo.js';

const setUp = (props={}) => {
    const defaultProps = {
        ...props,
        match: { params: { topic: 1 } },
    };
    const component = shallow(<Photo {...defaultProps}/>);
    return component;
};


describe('Photo Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'photoComponent');
        expect(wrapper.length).toBe(1);
    });
})