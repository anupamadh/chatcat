'use strict';
var express = require('express');
var app = express();
var chatCat = require ('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(chatCat.session);
app.use(passport.initialize());
app.use(passport.session());
app.use(require('morgan')('combined', {
  stream: {
    write: message => {
      //Write to logs
      chatCat.logger.log('info', message);
    }
  }
}));

app.use('/', chatCat.router);

chatCat.ioServer(app).listen(app.get('port'), () => console.log('ChatCAT running on port: ', app.get('port')));
