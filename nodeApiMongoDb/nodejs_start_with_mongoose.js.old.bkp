

/// start the project , get packge.json
npm init 



npm install express nodemon

//// create file app.js

///// add to top of file this requires 

const express = require("express");
const app = express();
const mongoose = require("mongoose");


/// now we need to make auto run our server by add this to package.json for auto refresh server on change

/// packge.json

"scripts": {
    "start": "nodemon app.js"
  },
  
  
  ///// install mongoos 
  
  npm install mongoose
  
  
  
  //// install dotenv to hide your username and password 
  
  npm install dotenv

  
  //// add to app.js 
  require("dotenv/config");
  
  /// we can add connection state object 
  global.status = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};
  
  
	// create file named .env 
	/// add var to save credentials  
	
	DB_CONNECTION = mongodb+srv://boze123:1qaz2wsx@cluster0.rf5pp.mongodb.net/fishes?retryWrites=true&w=majority

  
  
  
  /// back to app.js and start the connection to db 
  
  
  mongoose.connect(
  //// this is the db url with user and password encrypted by env
  process.env.DB_CONNECTION,

  { useUnifiedTopology: true },
  () => {
    console.log(
      `connection status : ${status[mongoose.connection.readyState]}`
    );
  }
);

  
  
  
  /// for sending json insted of html body
  npm install body-parser
  
  /// add body-parser to app.js
  const bodyParser = require("body-parser");
  
  
  
  
  /// install all modules from json 
  
  npm install 
  
  
  /////////////////////////////////////////  listener ///////////////////////////////////////// 
  
  
  /// add listener to app.js , this will start the server and listen to default port or port 5000
  
  app.listen(process.env.PORT || 5000);
  
  
  
  ///////////////////////////////////////// routing ///////////////////////////////////////// 
  
  
  
  
  
  /// start routing -> for exmaple http://localhost/adduser -> will go to folder routs/adduser.js
  
  
  /// create router 
  const router = express.Router();
  
  
  /// add the routing 
  const adduser = require('./routs/adduser');
  
  app.use('/adduser', adduser)
  
  
  
  //// create folder routs 
  //// in the folder we will create file adduser.js
  
  
  //// in top of file adduser.js we will add 
  
  const express = require("express");
  const router = express.Router();
  
  /// add cors for make request between domains
  
  const cors = require("cors");
  router(cors());
  

  
  
  
  /// now we can add to the  file adduser.js  anyting we want 
  /// for example 


  app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
	});
	
	
///// must add export to the end of the file !!!!!!!!!!!!

module.exports = router;







  /// every time we will go to the path /adduser we will get this array  exmp: http://localhost/adduser
  
  
  //////////////////////////////////////////////create module for send and receive post///////////////////
  
  
  
  //first to create folder models
  // and file for exmple product.js 
  
  // in file proudct.js
  
  
  const postSchema = mongoo
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  