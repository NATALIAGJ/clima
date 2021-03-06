var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));

app.set('view engine','pug');

app.use('/static', express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port puerto', app.get('port'));
});

require('./routes')(app);