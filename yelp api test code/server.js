var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');
//////////
var data;
var proxyYelp = function(request, response) {
  var respond = function() {
    response.send(data)
  }
  request_yelp(request.query, respond);
}
var request_yelp = function(set_parameters, callback) {
  var httpMethod = 'GET';
  var url = 'http://api.yelp.com/v2/search'
  var default_parameters = {
  };
  var required_parameters = {
    oauth_consumer_key : process.env.oauth_consumer_key,
    oauth_token : process.env.oauth_token,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);
  var consumerSecret = process.env.consumerSecret;
  var tokenSecret = process.env.tokenSecret;
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
  parameters.oauth_signature = signature;
  var paramURL = qs.stringify(parameters);
  var apiURL = url+'?'+paramURL;
  request(apiURL, function(error, response, body){
    data = body;
    callback();
  });

};
app.get('/yelp/*', proxyYelp);
app.use(express.static('./'));
app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});
app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
