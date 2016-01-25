var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};
//////////
var proxyYelp = function(request, response) {
  console.log('Routing Yelp request for', request.url);
  var qs_params = request.url.replace('/yelp/v2/search/?', '')
  request_yelp(qs_params, response);
}
var request_yelp = function(set_parameters, callback) {
  var httpMethod = 'GET';
  var url = 'http://api.yelp.com/v2/search'
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2'
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
    console.log(body);
    return (error, response, body);
  });

};
// request_yelp('term=tacos&location=seattle', function(err, res, body) {
//   console.log(res);
// })
//////////
app.get('/yelp/*', proxyYelp);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
