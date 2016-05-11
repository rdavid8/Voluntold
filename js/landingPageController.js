(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    if(qback){
      window.location = '/';
    } else {
      landingPageController.show();
    }
  };

  landingPageController.show = function() {
    $('#bg').show();
    $('#f1').show();
    $('#f2').show();
    $('#wrapper').one('click', function(){ //when clicked once. the wrapper fixed flashing issue by moving redirect from the window object to an atag. prevent page refresh.
      $('#qtrigger').trigger('click'); // qtrigger is triggered.
    });
    $('#f1').addClass('animated fadeInUp'); //beginning of the madness..f1 is the welcome text
    $('#f2').addClass('animated fadeInDownBig');
  };

  module.landingPageController = landingPageController;
})(window);
