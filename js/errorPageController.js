(function(module){

  var errorPageController = {};

  errorPageController.index = function(){
    $('#landing').hide();
    $('#questions').hide();
    $('#error').addClass('animated fadeIn').show();
    $('#e1').addClass('animated fadeInUp').show();
    $('#e2').addClass('animated fadeInDownBig').show();
    $('#bg3').addClass('animated fadeOut');
    $('#bg4').addClass('animated fadeIn').show();
    $('#shade2').addClass('animated fadeIn').show();
  };

    module.errorPageController = errorPageController;
})(window);
