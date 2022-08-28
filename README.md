# credits-tracker
A Node.js app to keep track of university credits. 

The goal of the project was to create a list of all the credits I have left in my program, so that I can visualize how many credits I need to graduate. 

The app is meant to run locally in a web browser. 

## Instructions 

To use the app on your local machine, simply clone the git repository using:

`git clone https://github.com/mdemichele/credits-tracker.git`

Once the project is cloned onto your local machine, make sure you have all the dependencies installed by running:

`npm install`

If all the dependencies are installed. To start the server, simply use:

`npm start`

And that's it! Start entering your classes and keep track of where you're at. 

## What I Learned Doing This Project 
- Learned how to build a fully-functioning app using the Node.js runtime and the Express.js framework.
- Developed a user interface with pug.js that accepts user inputs and communicats appropriately with the server.
- Implemented a REST api with 3 endpoints: `/`, `/add` and `/delete`. 
- Application supports basic CRUD operations.
- Built a data model with Mongoose.js to interface with a locally connected MongoDB instance. 


