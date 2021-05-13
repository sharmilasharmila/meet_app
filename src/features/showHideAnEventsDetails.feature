Feature: Show and Hide Event Details

    Scenario: User can expand an event to see its details
    Given The details of an event were hidden
    When The user clicks the “More Information” button
    Then The user will see additional details of that event

    Scenario: User can collapse an event to hide its details
    Given The user expanded an event to see more details
    When The user clicks “Collapse” button when he get all the necessary information
    Then User will only see a few information



