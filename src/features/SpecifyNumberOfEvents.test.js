import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import Event from '../Event';

const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let EventWrapper;
    let AppWrapper;
    let EventListWrapper;

    test('When user hasn’t specified a number, 10 is the default number', ({ given, when, then }) => {
        given('The user did not mention how many events he wants to see', () => {

        });

        when('The user is in the events page', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents />);
        });

        then('He will get information of 10 events', () => {
            expect(NumberOfEventsWrapper.find('.countin').at(0).props().value).toEqual(10);
        });
 });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('The user wanted to view few number of events', () => {

        });

        when('The user enters number of events in the text-box', () => {
            const eventValue = { target: { value: 8 } };
            NumberOfEventsWrapper.find('.countin').simulate('change',eventValue);
            expect(NumberOfEventsWrapper.state('eventValue')).toBe(8);
        });

        then('The user will only see the number of events he wished for', () => {
            expect(NumberOfEventsWrapper.find('.countin').at(0).props().type).toEqual('number');
        });
 });

});
