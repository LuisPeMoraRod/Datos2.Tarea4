# Frontend:

The frontend was built with ReactJS. To run the react-app, move to move to users_crud directory and install the following dependencies:

### `npm install bootstrap --save`
### `npm install react-router-dom --save`

Then, and execute the following command to run the app:

### `npm start`

This should run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# Backend:

The REST-API was built using Node, Express and MongoDB. Move to _api_ folder and install the following dependencies:

### `npm install express body-parser cors mongoose --save`
### `npm install nodemon --save-dev`

To run the DataBase, you should first install MongoDB and then hit the following command:

### `sudo systemctl start mongod`

This should start data base in port 27017.\
To run the server, open a new tab terminal inside _api_ folder and hit the following command:

### `nodemon server`

This should start node server.js in port: 4000.

