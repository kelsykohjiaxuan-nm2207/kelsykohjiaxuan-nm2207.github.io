// Chart 1: Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem 
// using chart.js to create bar chart of percentage of girls who felt pressure to be beautiful, by level of self-esteem with 3 different datasets (different levels of self-esteem)
    // Source: https://digitaluniversity.womendeliver.org/wp-content/uploads/2020/05/Mod-1-2017-Dove-Global-Girls-Beauty-and-Confidence-Report.pdf

    // array of data values to define height of the bars 
    const lowSE = [70, 30];  // Percentages
    const medSE = [60, 40];
    const highSE = [50, 50];

    // function takes 2 arguments, 1: ID of canvas element ("beauty-pressure") on which to draw the object in the html file, 2: an object containing chart configuration
    new Chart("beauty-pressure", {
                type: "bar",
                data: {
                  // x-axis categories 
                    labels: ["Felt pressure to be beautiful", "Did not feel pressure to be beautiful"],
                    datasets: [{
                      // one dataset to represent each group of bars on the chart 
                        label: "Low self-esteem",
                        data: lowSE,
                        // bars all coloured differently to indicate the different levels of self-esteem
                        backgroundColor: "hsla(329, 77%, 58%,0.8)", 
                borderColor: "hsla(329, 77%, 58%,1)"
                },
                {
                    label: "Medium self-esteem",
                    data: medSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(288, 24%, 56%,0.8)", 
                    borderColor: "hsla(288, 24%, 56%,1)"
                }, 
                {
                    label: "High self-esteem",
                    data: highSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(198, 35%, 72%,0.8)", 
                    borderColor: "hsla(198, 35%, 72%,1)"
                },
            ],},
            options: {
                 // chart title 
              title: {
                display: true,
                text: 'Percentage of girls who felt pressure to be beautiful, by level of self-esteem'
              },
              // put the chart legend at the bottom of the chart 
              legend: {
                position: 'bottom'
              },
              responsive: true, 
              // make sure the chart starts at 0 for the y-axis 
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

// Chart 2: Financial and non-financial costs of body dissatisfaction in the US by billion USD 
// using chart.js to create donut chart 

// chart data in dataObj2 - labels, data, colours for the chart 
const dataObj2 = {
  labels: [
          'Non-financial cost',
          'Financial cost',
           ],
  datasets: [{
    label: 'Cost of body dissatisfaction in the US, by billion USD',
    data: [221, 84],
    backgroundColor: [
                        'hsla(275, 48%, 88%, 0.8)',
                        'hsla(273, 28%, 75%, 0.8)',
                      ],
    hoverOffset: 4
              }]
                  };

// function takes 2 arguments, 1: ID of canvas element ("BD-cost") on which to draw the object in the html file, 2: an object containing chart configuration
new Chart("BDcost",
   {
     type: "doughnut",
     data: dataObj2,
     options: {
               title: {
                // display title of chart
                        display: true,
                        text: 'Cost of body dissatisfaction, by USD billions'
                        },
                legend: {
                  // put the legend at the bottom of the chart 
                          position: 'bottom'
                        },
               }
      })

// quiz 1 - used chatGPT for help on this element
// using js to create multiple-choice quiz 

// array 'questions' defines the questions and answer choices 
const questions = [
  {
    question: "How many billion USD do you think have been lost in the US due to body dissatisfaction?",
    // insert options and determine which button is the right answer
    answers: [
      // the first three choices are wrong and the last choice is correct - the "correct" element is set to true/false accordingly 
      { text: "<100 billion", correct: false },
      { text: "~200 billion", correct: false },
      { text: "~250 billion", correct: false },
      { text: ">300 billion", correct: true },
    ],
  },
];

// document.getElementById function retrieves the html elements "quiz-container", "question1", and "answer-buttons-container"
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question1");
const answerButtonsElement = document.getElementById("answer-buttons-container");

// before the quiz starts, initialising all variables 
let currentQuestionIndex = 0;
let hasShownQuizAlert = false;
let hasScrolledPastQuiz = false;

// function showQuestion sets the text content of the html element "question1" to the question property of the current question object 
function showQuestion(question) {
  questionElement.innerText = question.question;
}

// 
function showAnswers(question) {
  question.answers.forEach((answer, index) => {
    // document.createElement creates buttons for each answer choice and appends them to the "answer-buttons-container" in the html file 
    const button = document.createElement("button");
    // each button given the text of the answer choice as its text content 
    button.innerText = answer.text;
    button.classList.add("answer-button"); // Add answer-button class
    // if the button is the right answer, add "correct" attribute 
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // addEventListener - when user clicks, call function selectAnswer 
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// function to reset the quiz for viewers 
function resetQuiz() {
  currentQuestionIndex = 0;
  answerButtonsElement.innerHTML = "";
  showQuestion(questions[currentQuestionIndex]);
  showAnswers(questions[currentQuestionIndex]);
}

// called when user clicks on answer button. if correct, alert correct; if wrong, alert wrong. 
function selectAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct;   // check if button is correct by checking "Correct" attribute 
  
  // if correct/wrong, alert accordingly 
  if (isCorrect) {
    alert("Correct!");
  } else {
    alert("Wrong answer.");
  }

  currentQuestionIndex++;   // increment "currentQuestionIndex" after the question has been answered 
  hasShownQuizAlert = true;   // log that the quiz alert has been shown 
  if (currentQuestionIndex < questions.length) {     // if currentQuestionIndex is less than the total no. of questions in the quiz ("questions.length"), answer button elements is cleared and displays the next question and corresponding answer buttons (but there is no next question/answer buttons) 
    showQuestion(questions[currentQuestionIndex]);
    showAnswers(questions[currentQuestionIndex]);
  } else {
    // if currentQuestionIndex = questions.length, all questions have been answered, now reset quiz 
    resetQuiz(); // reset quiz to initialise 
  }
}

// added this section to make sure the "please try this quiz" alert only popped up when users scroll past the quiz section without attempting - in original code, the "please try this quiz" alert popped up on refresh even when users had not reached that section of the page 
// check if user has scrolled past quiz
window.addEventListener("scroll", function () { // add listener to window object to detect when users scrolls down the page 
  if (quizContainer.getBoundingClientRect().bottom < 0) { // when bottom of quiz container element goes above the visible area of the window ('getBoundingClientRect().bottom' becomes negative)
    hasScrolledPastQuiz = true;  
  }
});

//if quiz is not attempted and user has scrolled past quiz, alert 
window.addEventListener("scroll", function () {
  if (!hasShownQuizAlert && hasScrolledPastQuiz && currentQuestionIndex === 0) {
    alert("Please try the quiz!");
    hasShownQuizAlert = true;
  }
});

resetQuiz();

//quiz element 2 
// using js to create multiple-choice quiz 
// implementation same as the previous quiz - see above for comments 

const newQuiz = [
  {
    question: "Women reported feeling less confident in their body after watching reality TV shows - true or false?",
    // insert options and determine which button is the right answer
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },

    ],
  },
];

const newQuizContainer = document.getElementById("quiz-container2");
const newQuestionElement = document.getElementById("question2");
const newAnswerButtonsElement = document.getElementById("answer-buttons-container2");

let QuestionIndex = 0;
let ShownQuizAlert = false;
let ScrolledPastQuiz = false;

function showSecondQuestion(newQuestion) {
  newQuestionElement.innerText = newQuestion.question;
}

function showSecondAnswers(newQuestion) {
  newQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-button"); // Add answer-button class
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectSecondAnswer);
    newAnswerButtonsElement.appendChild(button);
  });
}

// function to reset the quiz for viewers 
function resetSecondQuiz() {
  QuestionIndex = 0;
  newAnswerButtonsElement.innerHTML = "";
  showSecondQuestion(newQuiz[QuestionIndex]);
  showSecondAnswers(newQuiz[QuestionIndex]);
}

// // event for when an answer is chosen. if correct, alert correct; if wrong, alert wrong. 
function selectSecondAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct;
  if (isCorrect) {
    alert("Correct!");
  } else {
    alert("Wrong answer.");
  }

  QuestionIndex++;
  ShownQuizAlert = true;

  if (QuestionIndex < newQuiz.length) {
    newAnswerButtonsElement.innerHTML = "";
    showSecondQuestion(newQuiz[QuestionIndex]);
    showSecondAnswers(newQuiz[QuestionIndex]);
  } else {
    resetSecondQuiz();
  }
}

// // added this section to make sure the "please try this quiz" alert only popped up when users scroll past the quiz section without attempting - in original code, the "please try this quiz" alert popped up on refresh
// check if user has scrolled past quiz
window.addEventListener("scroll", function () {
  if (newQuizContainer.getBoundingClientRect().bottom < 0) {
    ScrolledPastQuiz = true;
  }
});

// // if quiz is not attempted and user has scrolled past quiz, alert 
window.addEventListener("scroll", function () {
  if (!ShownQuizAlert && ScrolledPastQuiz && QuestionIndex === 0) {
    alert("Please try the quiz!");
    ShownQuizAlert = true;
  }
});

resetSecondQuiz();

// Chart 3: number of surgical and non-surgical cosmetic procedures worldwide from 2010-2021
// using chart.js to create line graph of trend of surgical and non-surgical cosmetic procedures from 2010-2021 
    // Source: International Society of Aesthetic Plastic Surgery (ISAPS) International Survey On Aesthetic/Cosmetic Procedures; (ISAPS, 2010; ISAPS, 2013; ISAPS, 2015; ISAPS, 2017; ISAPS, 2019; ISAPS, 2021)

// array to label the years along the x-axis
const years = [2010, 2013, 2015, 2017, 2019, 2021];
// For drawing the 3 lines - surgical, non-surgical, and total procedures for each year 
const surgicalData = [6735640, 11599336, 9641253, 10766848, 11363569, 12840688];
const nonSurgicalData = [7371211, 11874937, 12055418, 12623694, 13618735, 17598888];
const totalData = [14106851,23474273, 21696671,23390542, 24982304, 30439576];

// implementation similar to above, refer to charts 1 and 2 
new Chart("plasticSurgery", {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: surgicalData,
        label: "Surgical procedures",
        borderColor: "#B19AC6",
        fill: false
      },
      { 
        data: nonSurgicalData,
        label: "Non-surgical procedures",
        borderColor: "#A1C2D1",
        fill: false
      },
      { 
        data: totalData,
        label: "Total procedures",
        borderColor: "#E64398",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Number of surgical and non-surgical cosmetic procedures worldwide over the years'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        ticks: {
          // adjusting the axes to start at 5000000 and stop at 32000000 to maximise the size of the chart and reduce the blank space at the top/bottom of the chart 
          beginAtZero: true,
          min: 5000000,
          max: 32000000
        }
      }]
    }
  }
});
    
// Chart 3: number of productivity loss from body dissatisfaction in the US in 2019
// using chart.js to create stacked bar chart 
// implementation similar to above, refer to charts 1, 2, and 3 
    // Source: The Real Cost of Beauty Ideals (Dove, 2022)

    // arrays according to costs of each mental health issue 
    const depCost =[723, 1826, 3094, 3128, 4037];
    const EDCost = [974, 2778, 2208, 1026, 1300];
    const anxCost = [1429, 1323, 13269, 11634, 437];

    new Chart("prodLoss", {
                type: "bar",
                data: {
                    labels: ["Absenteeism", "Presenteeism", "Reduced employment", "Informal care", "Premature mortality"],
                    datasets: [{
                        label: "Depression",
                        data: depCost,
                        backgroundColor: "hsla(199, 34%, 73%,0.8)", 
                borderColor: "hsla(199, 34%, 73%,1)"
                },
                {
                    label: "Eating disorders",
                    data: EDCost,
                    borderWidth: 2,
                    backgroundColor: "hsla(338, 82%, 70%,0.8)", 
                    borderColor: "hsla(338, 82%, 70%,1)"
                }, 
                {
                  label: "Anxiety",
                  data: anxCost,
                  borderWidth: 2,
                  backgroundColor: "hsla(271, 28%, 69%, 0.8)", 
                  borderColor: "hsla(271, 28%, 69%, 1)"
              }, 
            ],},
          options: {
            title: {
              display: true,
              text: 'Annual productivity losses due to body dissatisfaction in 2019 in the US ($, USD millions)'
            },
            legend: {
              position: 'bottom'
            },
            tooltips: {
              displayColors: true,
              callbacks:{
                mode: 'x',
              },
            },
            scales: {
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: false,
                }
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  max: 20000, // adjusting y axis to maximise size of the bars 
                },
                type: 'linear',
              }]
            },
            responsive: true,
            maintainAspectRatio: false,
          }
        });

// interactive function for the interventions - when expandBox is called with boxNumber, the box should be expanded via CSS and previously "hidden" content should now be revealed 
  // function expandBox takes one parameter, boxNumber 
    function expandBox(boxNumber) {
       //select element with class name "box" at the index of boxNumber1 since there are 2 box elements on the page with class name "box"
         const box = document.querySelectorAll('.box')[boxNumber-1]; // selects all elements with class name "box", indexes the selected elements with class name "box" based on the value of "boxNumber". Since there are 2 box elements on the page with class name "box", it selects the one at the index of boxNumber-1.
         box.classList.toggle('expanded'); // toggles the "expanded" class of the selected box element, which determines whether the box is expanded or not 

   // select element with class name "number"
     const number = box.querySelector('.number'); // selects element with class name "number""
      number.style.top = box.classList.contains('expanded') ? '20px' : '10px'; // sets "top" CSS propety to either 20px or 10px, depending on whether "expanded" class is present on box element 
        
        const content = box.querySelector('.content'); 
        content.querySelector('p').classList.toggle('hidden'); // toggles "hidden" class of "p" element within selected "content" element. the "content" element is a child of the selected box element. 
        }
        
// text  animation 
function isElementInViewport(el) { // function takes argument 'el', checks if the element is currently in the viewport by getting the element's bounding rectangle and checking if its coordinates are within the viewport. It returns true if the element is in the viewport, and false if not.
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const text1 = document.querySelector('.text1'); // selects first element with the class name "text1" and assigns it to a variable 'text1'

function onScroll() { // function checks if text1 is in the viewport by calling isElementInViewport() and adding or removing the "animate" class to text1 accordingly
  if (isElementInViewport(text1)) {
    text1.classList.add('animate'); // If text1 is in the viewport, add 'animate' class and an event listener to remove the "animate" class when the animation ends.
    text1.addEventListener('animationend', onAnimationEnd, { once: true });
  } else {
    text1.classList.remove('animate');
    text1.removeEventListener('animationend', onAnimationEnd); // if text1 is not in viewport, remove 'animate' class and event listener 
  }
}

function onAnimationEnd() { //callback function, called when animation on text1 ends and removes animate class from 'text1'
  text1.classList.remove('animate');
}

window.addEventListener('scroll', onScroll); // add event listener to window object - listens for 'scroll' event and calls function 'onScroll' when event is triggered 

// carousel - template from w3 schools 
// controlling carousel using jQuery

// Activate Carousel - call 'carousel()' method on element with ID 'myCarousel'
$("#myCarousel").carousel();

// Enable Carousel Indicators - add click event listener to all elements with class 'item' 
$(".item").click(function(){
  $("#myCarousel").carousel(1); // on click, call the carousel() method on the myCarousel element with a parameter of 1, for user to move to the second slide 
});

// Enable Carousel Controls - add click event listener to all elements with class 'left'
$(".left").click(function(){ 
  $("#myCarousel").carousel("prev"); // on click, call carousel() method on 'myCarousel' element with parameter 'prev', for user to move to previous slide 
});

// scroll bar indicator to update user on how far they have scrolled down the page 
// When the user scrolls the page, execute scrollBar  
window.onscroll = function() {scrollBar()};

function scrollBar() { 
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop; // to get the amount that user has scrolled down, use either 'document.body.scrollTop' or 'document.documentElement.scrollTop' and store this value in winScroll
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // calculate total height of page using total height of document ('document.documentElement.clientHeight') minus height of visible viewport ('document.documentElement.clientHeight'), store in const'height'
  const scrolled = (winScroll / height) * 100; // calculate percentage of how far the user has scrolled relative to total height of page 
  document.getElementById("myBar").style.width = scrolled + "%"; // set width of html element 'myBar' to 'scrolled' value to update the width of the bar as the user scrolls 
}