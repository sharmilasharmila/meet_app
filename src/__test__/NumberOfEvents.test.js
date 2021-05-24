import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.countin')).toHaveLength(1);
  });

  test('check input default value is 10', () => {
    expect(NumberOfEventsWrapper.find('.countin').at(0).props().value
    ).toEqual(10);
  });

  test('check placeholder', () => {
    expect(NumberOfEventsWrapper.find('.countin').at(0).props().placeholder).toEqual('Enter Number of Events');
  });

  test('check on change state', () => {
    const eventValue = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.countin').simulate('change',eventValue);
    expect(NumberOfEventsWrapper.state('eventValue')).toBe(8);
  });

  test('check type is equal to number', () => {
    expect(NumberOfEventsWrapper.find('.countin').at(0).props().type).toEqual('number');
  });
});
