# RoboFriends with Create React App (CRA)

Search for your robofriends! This is my first react web application.

## To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## A lil Description
This project is created using CRA with React 18. The application uses state and lifecycle hooks. State are used to store the robots and enable the search box to work. Error boundary is implemented for the CardList in case the users are unable to fetch the users using the API call.

The main components of this project is the Card which is used in the CardList component. Another feature is the searchbox that filers and fine the robot with the matching name. 

The robots (or users) are fetched using an API call with jsonplaceholder. Tachyons is also used to help with styling without touching CSS. The font for the logo is SEGA Logo Font.
