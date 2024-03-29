export function getTutorialSteps(navigationCallback): any[] {
  return [
    {
        id: "welcome",
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'Welcome to HTML StudyBuddy!',
        text: ['We are really happy to have you here with us! Welcome to your first day as a web developer, we hope in the upcoming days you can help us to turn our designs into websites.'],
    },
    {
        id: "notebook",
        attachTo: { 
          element: '#goal-snippet', 
          on: 'left'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            navigationCallback('goal')
            setTimeout(function() {
              resolve('');
            }, 500);
          });
        },
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'The notebook',
        text: ['This is the notebook that contains all the designs that you will have to implement.'],
    },
    {
        id: "codespace",
        attachTo: { 
          element: '#code-editor', 
          on: 'right'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            navigationCallback('code')
            setTimeout(function() {
              resolve('');
            }, 500);
          });
        },
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'The CodeSpace',
        text: ['This is where you can drag around jigsaw puzzle pieces in order to construct the HTML for the web version of the designs! Clicking on a category will show blocks belonging to that category that can then be used to create code. The code clicks together to create a nice document.'],
    },
    {
        id: "codespace2",
        attachTo: { 
          element: '#code-editor', 
          on: 'right'
        },
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'The CodeSpace',
        text: ['For this tutorial you will only need blocks from the tutorial blocks section.'],
    },
    {
        id: "result",
        attachTo: { 
          element: '#result-viewer', 
          on: 'right'
        },
        beforeShowPromise: function() {
          return new Promise(function(resolve) {
            navigationCallback('result')
            setTimeout(function() {
              resolve('');
            }, 500);
          });
        },
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'The result screen',
        text: ['Here you can see the output of your current HTML document. You should make sure to match the design in the notebook as close as possible, but in terms of content and style. As you can see your current website is still missing a paragraph!'],
    },
    {
      id: "help",
      attachTo: { 
        element: '#help-button', 
        on: 'bottom'
      },
      buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Back',
            type: 'back'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
      ],
      title: 'Help button',
      text: ['If you get stuck writing the code you can press the help button, a popup will show with additional information about the elements that you will need.'],
  },
    {
        id: "bye",
        buttons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
        ],
        title: 'Good luck!',
        text: ['Have fun completing all the designs! Good luck and thanks for your help!'],
    },
];
}