var intro = introJs();
function addHints(){
  intro.setOptions({
    hints: [
      {
        element: '#menu1',
        hint: "This is a tooltip.",
        hintPosition: 'top-middle'
      },
      {
        element: '#menu1',
        hint: 'More features, more fun.',
        position: 'left'
      },
      {
        element: '#menu1',
        hint: "<b>Another</b> step.",
        hintPosition: 'top-middle'
      }
    ]
  });
  intro.onhintsadded(function() {
    console.log('all hints added');
  });
  intro.onhintclick(function(hintElement, item, stepId) {
    console.log('hint clicked', hintElement, item, stepId);
  });
  intro.onhintclose(function (stepId) {
    console.log('hint closed', stepId);
  });
  intro.addHints();
}
function startIntro(){
  intro.setOptions({
    steps: [
      {
        intro: "Hello world!"
      },
      {
        element: '#menu1',
        intro: "This is a tooltip."
      },
      {
        element: '#menu2',
        intro: "Ok, wasn't that fun?",
        position: 'right'
      },
      {
        element: '#menu3',
        intro: 'More features, more fun.',
        position: 'left'
      }
    ]
  });
  intro.start();
}