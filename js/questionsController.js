(function(module){

  var questionsController = {};
  questionsController.index = function(){
    qback = true;
    if(back){
      window.location = '/';
    } else {
      questionsController.showQ1();
      questionsController.showQ2();
      questionsController.handleInput();
    };
  };

  questionsController.showQ1 = function(){
    $('#shade').addClass('blue');
    $('#f1').addClass('animated fadeOutRightBig');
    $('#f2').addClass('animated fadeOutLeftBig');
    $('#bg').addClass('animated fadeOut');
    $('#bg2').addClass('animated fadeIn').show();
    $('#q1').addClass('animated fadeInDown').show().siblings().hide();
    $('#form').show();
  };

  questionsController.showQ2 = function(){
    $('form').on('click', 'li.cs-selected span', function(){
      questionsController.term = $('#term').val(); //grabbing from the drop down selection
      $('#shade').addClass('purp');
      $('#q1').addClass('animated fadeOutUp');
      $('#q2').addClass('animated fadeInUp').show();
      $('#bg2').addClass('animated fadeOut');
      $('#bg3').addClass('animated fadeIn').show();
      $('#submit2').hide();
    });
  };

  questionsController.handleInput = function(){
    $('#submit2').on('click', function(e){
      e.preventDefault();
      questionsController.location = $('#location').val(); //grabbing location from input box
      console.log(questionsController.location);
      yelp.ajaxCall(Location.prepResults); //This will be our new function call to trigger page.js
      $('#questions').addClass('animated fadeOut');
      $('#map').addClass('animated fadeIn').show();
      $('#sidebar').addClass('animated fadeInRight').show();
      $('#bg3').addClass('animated fadeOut');
      $('#shade').addClass('animated fadeOut');
    });
  };

  module.questionsController = questionsController;
})(window);
