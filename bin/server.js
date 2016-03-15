var app = require('../video-server.js');
app.set('port', process.env.PORT || 3125);

var server = app.listen(app.get('port'), function() {
  console.log('server is live on ' + server.address().port);
});
