var back = false; //Used to track if the user has hit the results/noresults pages -- Page will reroute accordingly.

page('/', landingPageController.index);
page('/questions', questionsController.index);
page('/noresults', errorPageController.index);
page('/results', Location.loadAll);
page();
