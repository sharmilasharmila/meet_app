# meet_app
FEATURE 1: FILTER EVENTS BY CITY As a user I should be able to “filter events by city” So that I can see the list of events that take place in that city

• Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. Given: user hasn’t searched for any city When: the user opens the app Then: the user should see a list of all upcoming events

• Scenario 2: User should see a list of suggestions when they search for a city. Given: the main page is open When: user starts typing in the city textbox Then: the user should see a list of cities (suggestions) that match what they’ve typed

• Scenario 3: User can select a city from the suggested list. Given: the user was typing “Berlin” in the city textbox and the list of suggested cities is showing When: the user selects a city (e.g., “Berlin, Germany”) from the list Then: their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS As a user, I should be able to Show/hide an event’s details So that I can view the details of the events when I needed and Collapse them when I do not want to see them

• Scenario 1: An event element is collapsed by default Given: The event details are collapsed When: The user opens the event details Then: User can expand if he needs more details

• Scenario 2: User can expand an event to see its details Given: The details of an event were hidden When: The user clicks the “More Information” button Then: The user will see additional details of that event

• Scenario 3: User can collapse an event to hide its details Given: The user expanded an event to see more details When: The user clicks “Collapse” button when he get all the necessary information Then: User will only see a few information

FEATURE 3: SPECIFY NUMBER OF EVENTS As a user, I should be able to Specify number of events So that I can see only the number of events I needed in that city

• Scenario 1: When user hasn’t specified a number, 32 is the default number Given: The user did not mention how many events he wants to see When: The user is in the events page Then: He will get information of 32 events

• Scenario 2: User can change the number of events they want to see Given: The user wanted to view few number of events When: The user enters number of events in the text-box Then: The user will only see the number of events he wished for

FEATURE 4: USE THE APP WHEN OFFLINE As a user, I should be able to use the app offline So that I can view event details even I have no internet connection

• Scenario 1: Show cached data when there’s no internet connection Given: The user lost the internet connection When: The user wants to see the event details Then: The user will be redirected to the cached data which is available offline

• Scenario 2: Show error when user changes the settings (city, time range) Given: The faulty information is given in settings When: The user types faulty information for the city and time details Then: The user will be warned with an error message

FEATURE 5: DATA VISUALIZATION As a user, I should be able to Visualize the data So that I can view the details of the events’ details using chart which is easy to understand

• Scenario 1: Show a chart with the number of upcoming events in each city Given: User want to experience the event details visually by using charts When: The user goes to data visualization page Then: The user will be given details of upcoming event details
