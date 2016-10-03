'use strict';

if(process.env.NODE_ENV === 'production'){
  module.exports = {
    host :process.env.host || "" ,
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    fb: {
      clientID: process.env.fbclientID,
      clientSecret: process.env.fbclientSecret,
      callbackURL: process.env.host + "/auth/facebook/callback",
      "profileFields": ["id", "displayName", "photos"]
    }
  }

}else {
  module.exports = require ('./development.json');
}
