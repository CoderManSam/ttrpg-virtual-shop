# TTRPG VIRTUAL SHOP

An app where you can create your own virtual representations of TTRPG shops with your own items which players can view and purchase

Created as my final project for a 6-month coding bootcamp. As someone that runs and plays TTRPG's I thought an app that players could view an actual representation of a shop they visit in-game would be a fun and interactive experience

This app uses React for the frontend and NodeJS, express, postgreSQL, and prisma for the backend

## Installation

1. ```git clone``` to your machine
2. Install project dependencies (```npm ci```, or your package manager of choice)
3. Add a ```.env``` file ensuring ```.env``` is included in your ```.gitignore```
4. Add ```DATABASE_URL``` and ```SHADOW_DATABASE_URL``` variables to your .env adding database url's for each for prisma to use. Add ```?schema=prisma``` to the end of the first and ```?schema=shadow``` to the end of the shadow database url
5. Add ```JWT_SECRET``` and ```JWT_EXPIRY``` variables to your ```.env``` providing a token secret for the former and a duration before the token expires for the latter
6. Add ```REACT_APP_API_URL``` and ```REACT_APP_USER_TOKEN``` variables to your ```.env``` providing an api url and a string for your token to be referenced by
7. Run ```npx prisma migrate reset``` to execute the existing prisma migrations 

## Usage

### Homepage

- Has the option to swap between DM and player view top left below the header
- Displays either the shops and items you've created as a DM(Dungeon Master), or the shops you've been granted access to as a player as well as the items you've purchased from those shops
- Clicking the plus icon beside either of the headers opens up a form to add the details to create a new shop or item which will then appear in the relevant sections of the page
- Clicking an item on either the DM or player view will display the item's information below it
- Clicking a shop on either the DM or player view will take you to the page for that shop (the shop page displayed will be different if accessed as a DM or player)

### Shop (DM view)

- The page will display the image used as the background of the shop as well as a section to the right with all items you've created as a DM
- The DM version of the shop will have a clickable element in the header opening a form to add the usernames of players that you wish to grant access to the shop to
- The items on the page can be dragged to anywhere within the shop to allocate where they would be positioned within the shop
- Once all items you wish to be displayed in your shop have been moved to their correct position you can click the "save positions" element at the top to save the position of the items to the db (if not clicked the item positions will reset)
- Items can be double clicked to open a window with that item's information

### Shop (Player view)

- The player will have a Cart section to the right in place of the DM's item section (cart section currently WIP)
- The shop will be displayed with the same background image and any items the DM has allocated a position to
- Players are unable to drag the items around but are able to click them to view their information
- Upon vieiwing an item's information they are also able to purchase the item which will cause it to leave the shop and be added to their player inventory
- The player can then go back to the homepage and within the player inventory section the item purchased will now be visible 

## Development Process

I came up with this idea for my final project of the bootcamp quite easily and knew it'd be quite feasible. The only issue was whether I'd be able to get the dragging functionality in the shop working.
After a bunch of googling and youtube videos I found the method that fit what I wanted best and after testing it out a bit managed to make it work. After that it was about as smooth sailing as a project's gonna be.

The tech stack used is what was taught in the course, the only addition I made was the use of Bootstrap and Material UI packages for styling 

I took some time out to play out the format of the app, the functions and pages that'd be needed for the frontend, and the routes, controllers, and models needed for the backend. Once I had a good idea in mind I got to work starting with the backend as I find it easier to start with the backend and with the backend already set up find it easier to connect that to an existing backend.

The image below shows the wireframes and ERD I created to give myself something to work off when initially building the frontend and backend, and neither changed too much from the initial conception.

![ERD and Wireframes](/assets/ERD-&-Wireframes.png)

## Feature changes/additions 

1. Bug fixes, too many to count. It all works at a basic level but there's a lot that can and will be improved on.
2. Styling. I worked on functionality first with styling last so it doesn't look great so I'll be working on making it look a lot more presentable 
3. Adding cart functionality. I'd like to add the ability for players to add an item to a cart so they can buy multiple items from a shop at once rather than having to do so individually
4. Linking it to my DnD character sheet project. The ultimate goal is to complete this and my first solo project, the DnD character sheet, and have it so the gold a player has on their character sheet is added to and displayed in this app and when purchases are made through this app the gold cost is deducted from their character sheet and the item they've purchased is added to their character sheet. This would only be worked on after the above is completed however