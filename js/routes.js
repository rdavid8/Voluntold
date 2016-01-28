var back = false;

page('/', landingPageController.index);

page('/questions', questionsController.index);

page('/noresults', errorPageController.index);

page('/results', Location.loadAll);
// page('/about', aboutController.index);
//
// page('/result', resultController.index);

page();
