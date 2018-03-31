Front End Coding Challenge

# To start the project

 1. Install the dependencies with npm i
 2. Start the project with npm start

# About
  Because the Endpoints below require an API Key, I did not feel comfortable hardcoding that into the App.
  Meetup Allows you to create a signed API call with unchangable query params to get around this.
  That means the default event you will see are the rsvps for the event from 1st call at the time this was created.
  If you wish to get the current 1st event for the group reactjs-dallas and execute both calls, you can enter your own api key [Available Here](https://secure.meetup.com/meetup_api/key/).

# Description

Build and deploy a React application that meets the following criteria:

Consume Meetup.com web API and display information about an upcoming ReactJS Dallas event
Use the v3 events endpoint to get event information (the urlname for the group is “reactjs-dallas”):
Docs: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
Url: https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1
Use the v3 rsvps endpoint to get rsvps for an event. Use the “id” of the event returned from the call above.
Docs: https://secure.meetup.com/meetup_api/console/?path=%2F%3Aurlname%2Fevents%2F%3Aevent_id%2Frsvps
Url: https://api.meetup.com/reactjs-dallas/events/{event-id}/rsvps?&sign=true&photo-host=public
