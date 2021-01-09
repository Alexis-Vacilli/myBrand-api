# myBrand-api

Getting started
===============
1. To get the node server running locally

 Clone this repo: https://github.com/Alexis-Vacilli/Personal-brand.git
 npm install to install all the required dependencies
 npm run dev to start the local server
2. Dependencies

 expressjs - The server for handling and routing HTTP requests
 express-jwt - Middleware for validating JWTs for authentication
 jsonwebtoken - For generating JWTs used by authentication
 mongoose - For modeling and mapping MongoDB data to javascript
 babeljs - Since we'll be writing all our JavaScript code using ES6, babeljs will help in converting our ES6 codes to ES5.

3. Tools used 
>> Server-side: Nodejs
>> Testing library: Chai or Mocha

4. Other tools 
>> ES6 transpiler: Babel
>> Testing the coverage: NYC
>> Continous intergration(CI): Github actions 
>> Deployment: Netlify && Heroku


5. API endpoints 
>> User 
    .POST/Register: Create an account 
    .POST/Login: Login into your account 
>> Article
    .POST/Article: Create an article
    .GET/Article: Read all articles
    .PATCH/Article: Update an article
    .DELETE/Article: Delete an article
>> Query
    .POST /messages: Create a message
    .GET /messages: Fetch all messages
    .DELETE /messages/:messageID: Delete a message

>>>> Description:
    Application structure app.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application. config/ - This folder contains configuration for passport as well as a central location for configuration/environment variables. routes/ - This folder contains the route definitions for our API. models/ - This folder contains the schema definitions for our Mongoose models.
>>>> Author: 
    Alexis Vacilli

![Node.js CI](https://github.com/Alexis-Vacilli/myBrand-api/workflows/Node.js%20CI/badge.svg)