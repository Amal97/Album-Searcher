import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../Utils';
import Album from './Album';

describe('Album Component', () => {

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            };
            wrapper = shallow(<Album {...props} />);
        });

        it('Should render without error', () =>{
            const component = findByTestAtrr(wrapper, 'AlbumComponent');
            expect(component.length).toBe(1);
        });
        
        it('Should render a title', () =>{
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        describe('Should not render', () =>{
            let wrapper;
            beforeEach(() => {
                const props = {
                    desc: 'Some text'
                };
                wrapper = shallow(<Album {...props} />);
            });

            it('Componenet is not rendered', () => {
                const component = findByTestAtrr(wrapper, 'AlbumComponent');
                expect(component.length).toBe(0);
            })


        })
        
    })
})