// 
// var yelp = {};
// yelp.all = [];
//
// yelp.requestYelp = function(callback) {
//   $.ajax({
//       url: 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',
//       type: 'GET',
//       headers: { 'oauth_token': 'DKggcZJXgavIHObp52vomLqJ6PPsS0Fr',
//                  'oauth_consumer_key': '6S-kNQ14bULOjYdRyawvfA',
//                  'oauth_consumer_secret': 'jKlL7sEYT8gjD3xxmSYSWV7PiuM',
//                  'oauth_token_secret': 'mW0lTRK-QU15YDlNPk_dZfVUdMI',
//                  'oauth_signature_method': 'PLAINTEXT'
//       },
//       success: function(data, message, xhr) {
//         yelp.all = data;
//       }
//     }).done(callback);
//   };
//
//
// var renderToPg = function(){
//     console.log(yelp.all);
//     $("body").append(yelp.all);
// };
//
//
// yelp.requestYelp(renderToPg);
