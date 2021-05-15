Feature: Specify Number Of Events

    Scenario: When user hasn’t specified a number, 32 is the default number
    Given The user did not mention how many events he wants to see
    When The user is in the events page
    Then He will get information of 32 events

    Scenario: User can change the number of events they want to see
    Given The user wanted to view few number of events
    When The user enters number of events in the text-box
    Then The user will only see the number of events he wished for

