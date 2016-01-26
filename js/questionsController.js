(function(module){

  var questionsController = {};

  questionsController.index = function(){
    $('#sidebar').hide();
    $('#map').hide();
    $('#landing').hide();
    $('#q1').show().siblings().hide();


    $('form').on('click', 'li.cs-selected span', function(){
        console.log('what');
        questionsController.term = $("#term").val();
        console.log(questionsController.term);
        $('#q1').hide();
        $('#q2').show();
    });


    $('#submit2').on('click', function(e){
      e.preventDefault();
      questionsController.location = $("#location").val();
      console.log(questionsController.location);
      $('#form').hide();
      yelp.ajaxCall(Location.loadAll);
      $('#map').show();
      $('#sidebar').show();
    });

  };

    module.questionsController = questionsController;
})(window);
