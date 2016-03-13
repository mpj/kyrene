var Promise = this.Promise || require('es6-promise').Promise;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.post('/event', function (request, response) {
  console.log("body", request.body.hello)
});

app.post('/slurp', function (request, response) {
  console.log("new body is", request.body);

  //var agent = require('superagent-promise')(require('superagent'), Promise);
  /*var PARTICLE_ACCESS_TOKEN =
    '965292bbc174cdc060fe03ad1e47eff3934e525b';*/
  /*
  agent
        .post('https://api.particle.io/v1/devices/' + request.body.coreid + '/sweepz?access_token=' + PARTICLE_ACCESS_TOKEN)
        .send('arg=' + 17)
        .end()

  */

  response.status(200).end();

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
