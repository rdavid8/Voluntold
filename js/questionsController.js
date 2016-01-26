(function(module){

  var questionsController = {};

  questionsController.index = function(){
    $('#map').hide();
    $('#landing').hide();
    $('#q1').show().siblings().hide();
    $('#submit1').on('click', function(e){
      e.preventDefault();
      questionsController.term = $("#term").val();
      console.log(questionsController.term);
      $('#q1').hide();
      $('#q2').show();
    });

    $('#submit2').on('click', function(e){
      e.preventDefault();
      questionsController.location = $("#location").val();
      console.log(questionsController.location);
      yelp.ajaxCall(Location.loadAll);
      $('#map').show();

      // eventually will route to result page after 2nd submit button

    });
  };

    module.questionsController = questionsController;
})(window);
