import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let EventWrapper;
    let AppWrapper;
    let EventListWrapper;

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('The details of an event were hidden', () => {

        });

        when('The user clicks the “More Information” button', () => {
            AppWrapper = mount (<App />);
            AppWrapper.update();
            //AppWrapper.find('.btnShowHide').at(0).simulate('click');
            EventWrapper.find('.btnShowHide').simulate('click');
            //EventWrapper = shallow(<Event event={mockData} />);
            //EventWrapper.find(".btnShowHide").simulate("click");
        });

        then('The user will see additional details of that event', () => {
            expect(AppWrapper.find('.details')).toHaveLength(1);
            //EventWrapper = shallow(<Event event={mockData} />);
            //expect(EventWrapper.find(".details")).toHaveLength(1);
        });
 });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('The user expanded an event to see more details', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = mount(<EventList events={mockData} />);
            EventWrapper = mount(<Event event={mockData[0]} />);
            //EventWrapper = shallow(<Event event={mockData} />);
            //expect(EventWrapper.find(".details")).toHaveLength(1);
        });

        when('The user clicks “Collapse” button when he get all the necessary information', () => {
            AppWrapper = mount (<App />);
            AppWrapper.update();
            //AppWrapper.find('.btnShowHide').at(0).simulate('click');
            EventWrapper.find('.btnShowHide').simulate('click');
            //EventWrapper = shallow(<Event event={mockData} />);
            //EventWrapper.find(".btnShowHide").simulate("click");
        });

        then('User will only see a few information', () => {
            expect(AppWrapper.find('.details')).toHaveLength(0);
            //EventWrapper = shallow(<Event event={mockData} />);
            //expect(EventWrapper.find(".details")).toHaveLength(0);
        });
 });

});