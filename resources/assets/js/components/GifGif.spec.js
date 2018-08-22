import React from 'react';
import { mount } from 'enzyme';
import GifGif from './GifGif';

window.axios = {
    post: jest.fn().mockImplementation(() => Promise.resolve([]))
};

describe('GifGif', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<GifGif votes={JSON.stringify([])} />);
    });

    it('renders', () => {
        expect(wrapper.text()).toContain('How do you pronounce the word gif?');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with props', () => {
        let vote = {
            picked: 'jif',
            reason: 'It is how you pronounce gin',
            name: 'Samantha'
        };

        wrapper = mount(<GifGif votes={ JSON.stringify([vote]) } /> );

        expect(wrapper.text()).toContain(vote.reason);
        expect(wrapper.text()).toContain(vote.name);
        expect(wrapper).toMatchSnapshot();
    });

    it('updates the selected pronuncation', () => {
        wrapper.find('#jif').simulate('click');
        expect(wrapper.state('picked')).toBe('jif');

        wrapper.find('#gif').simulate('click');
        expect(wrapper.state('picked')).toBe('gif');
    });

    it('submits a vote', async () => {
        let vote = {
            picked: 'jif',
            reason: 'It is how you pronounce gin',
            name: 'Samantha'
        };

        expect(wrapper.state('votes').length).toBe(0);

        wrapper.find('#jif').simulate('click');
        expect(wrapper.state('picked')).toBe('jif');

        // Update the reason input
        let reason = wrapper.find('#reason');
        reason.simulate('change', { target: { value: vote.reason }});
        expect(wrapper.state('reason')).toBe(vote.reason);

        // Update the name input
        let name = wrapper.find('#name');
        name.simulate('change', { target: { value: vote.name }});
        expect(wrapper.state('name')).toBe(vote.name);

        // Click the submit button
        wrapper.find('#submit').simulate('click');

        // Look, mom! No wrapper.vm.$nextTick() !
        await expect(axios.post).toBeCalledWith('/api/votes', vote);

        // Check that vote is added to vote
        expect(wrapper.state('votes').length).toBe(1);

        // Check that the vote is rendered somewhere
        expect(wrapper.text()).toContain(vote.reason);
        expect(wrapper.text()).toContain(vote.name);
        expect(wrapper.state('reason')).not.toBe(vote.reason);
        expect(wrapper.state('name')).not.toBe(vote.name);
    });

    it('cannot submit without all fields', () => {
        wrapper.find('#submit').simulate('click');
        expect(wrapper.state('votes').length).toBe(0);
    });
});
