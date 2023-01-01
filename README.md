# Full Stack Goal Setting
This project is a full stack web application for setting and tracking personal goals. It features a backend built with Node.js, Express, and MongoDB, and a frontend built with React and Redux.

# Backend
The backend of this project is built with the following technologies:

Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine
Express: a fast, minimalist web framework for Node.js
CORS: a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
JWT: a Node.js library for generating and verifying JSON Web Tokens
Bcrypt: a Node.js library for hashing passwords
MongoDB: a NoSQL database used to store user and goal data
The backend also has a user model and a goal model. The user model stores data such as a user's name, email, and hashed password. The goal model stores data such as a goal's title, description, and completion status.

# Frontend
The frontend of this project is built with the following technologies:

React: a JavaScript library for building user interfaces
Redux: a state management library for JavaScript applications
Redux Toolkit: a set of utilities for working with Redux
React Router DOM: a collection of navigational components for React
The frontend allows users to create and log in to their account, set and track their goals, and mark goals as complete.

#Running the Project
To run this project, you will need to have Node.js and MongoDB installed on your machine. Then, follow these steps:

# Clone the repository to your local machine
Navigate to the project directory and run npm install to install the necessary dependencies
Start the MongoDB server by running mongod in a separate terminal window
In the project directory, run npm run dev to start the backend server
In a separate terminal window, navigate to the client directory and run npm start to start the frontend server
Open your web browser and navigate to http://localhost:3000 to view the application.
