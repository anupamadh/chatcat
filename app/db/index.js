'use strict';
var config = require('../config');
const logger = require('../logger');
var Mongoose = require('mongoose').connect(config.dbURI);

//Log an error if the connection fails
Mongoose.connection.on('error', error => {
  logger.log('error' , 'Mongoose connection error: ' + error);
})
// Create a Schema that defines the structure for storing user data
var chatUser = new Mongoose.Schema({
  profileID: String,
  fullName: String,
  profilePic: String
})

//Turn the schema into a usable model
var userModel = Mongoose.model('chatUser', chatUser);

module.exports ={
  Mongoose,
  userModel
}
