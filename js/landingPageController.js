(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    $('#logo').addClass('animated fadeInLogo'); //adding class into logo. fades in.
    $('#wrapper').one('click', function(){ //when clicked once. the wrapper fixed flashing issue by moving redirect from the window object to an atag. prevent page refresh.
      $('#qtrigger').trigger('click'); // qtrigger is triggered.
    })
    $('#f1').addClass('animated fadeInUp'); //beginning of the madness..f1 is the welcome text
    $('#f2').addClass('animated fadeInDownBig');
    $('#bg').addClass('animated fadeIn');
    $('#shade').addClass('animated fadeIn');
  };

    module.landingPageController = landingPageController;
})(window);
