(function(module){

  var errorPageController = {};

  errorPageController.index = function(){
    back = true;
    errorPageController.hide();
    errorPageController.show();
  };
  errorPageController.show = function(){
    $('#error').addClass('animated fadeIn').show();
    $('#e1').addClass('animated fadeInUp').show();
    $('#e2').addClass('animated fadeInDownBig').show();
    $('#bg3').addClass('animated fadeOut');
    $('#bg4').addClass('animated fadeIn').show();
    $('#shade2').addClass('animated fadeIn').show();
  };
  errorPageController.hide = function(){
    $('#landing').hide();
    $('#questions').hide();
    $('#sidebar').hide();
    $('#map').hide();
  };

  module.errorPageController = errorPageController;
})(window);
