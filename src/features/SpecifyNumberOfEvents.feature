Feature: Specify Number Of Events

    Scenario: When user hasn’t specified a number, 10 is the default number
    Given The user did not mention how many events he wants to see
    When The user is in the events page
    Then He will get information of 10 events

    Scenario: User can change the number of events they want to see
    Given The user wanted to view few number of events
    When The user enters number of events in the text-box
    Then The user will only see the number of events he wished for
