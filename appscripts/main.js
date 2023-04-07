    
    // Chart 1: Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem 
    // Source: https://digitaluniversity.womendeliver.org/wp-content/uploads/2020/05/Mod-1-2017-Dove-Global-Girls-Beauty-and-Confidence-Report.pdf

    const lowSE = [70, 30];  // Percentages
    const medSE = [60, 40];
    const highSE = [50, 50];

    new Chart("beauty-pressure", {
                type: "bar",
                data: {
                    labels: ["Felt pressure to be beautiful", "Did not feel pressure to be beautiful"],
                    datasets: [{
                        label: "Low self-esteem",
                        data: lowSE,
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
              title: {
                display: true,
                text: 'Percentage of girls who felt pressure to be beautiful, by level of self-esteem'
              },
              legend: {
                position: 'bottom'
              },
              responsive: true, 
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

// Chart 2: Financial and non-financial costs of body dissatisfaction in the US by billion USD (donut chart) 
                const dataObj2 = {
                    labels: [
                      'Non-financial cost',
                      'Financial cost',
                    ],
                    datasets: [{
                      label: 'Cost of body dissatisfaction in the US, by billion USD',
                      data: [221, 84],
                      backgroundColor: [
                        'hsla(271, 28%, 69%, 0.8)',
                        'hsla(276, 31%, 94%, 0.8)',
                      ],
                      hoverOffset: 4
                    }]
                  };

                  new Chart("BDcost",
                  {
                      type: "doughnut",
                      data: dataObj2,
                      options: {
                        title: {
                          display: true,
                          text: 'Cost of body dissatisfaction, by USD billions'
                        },
                        legend: {
                          position: 'bottom'
                        },
                      }})


// quiz 1 - used chatGPT for help on this element

const questions = [
  {
    question: "How many billion USD do you think have been lost in the US due to body dissatisfaction?",
    // insert options and determine which button is the right answer
    answers: [
      { text: "<100 billion", correct: false },
      { text: "~200 billion", correct: false },
      { text: "~250 billion", correct: false },
      { text: ">300 billion", correct: true },
    ],
  },
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question1");
const answerButtonsElement = document.getElementById("answer-buttons-container");

let currentQuestionIndex = 0;
let hasShownQuizAlert = false;
let hasScrolledPastQuiz = false;

function showQuestion(question) {
  questionElement.innerText = question.question;
}

function showAnswers(question) {
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-button"); // Add answer-button class
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
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

// event for when an answer is chosen. if correct, alert correct; if wrong, alert wrong. 
function selectAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct;
  if (isCorrect) {
    alert("Correct!");
  } else {
    alert("Wrong answer.");
  }
  currentQuestionIndex++;
  hasShownQuizAlert = true; 
  if (currentQuestionIndex < questions.length) {
    answerButtonsElement.innerHTML = "";
    showQuestion(questions[currentQuestionIndex]);
    showAnswers(questions[currentQuestionIndex]);
  } else {
    resetQuiz();
  }
}

// added this section to make sure the "please try this quiz" alert only popped up when users scroll past the quiz section without attempting - in original code, the "please try this quiz" alert popped up on refresh
// check if user has scrolled past quiz
window.addEventListener("scroll", function () {
  if (quizContainer.getBoundingClientRect().bottom < 0) {
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

//quiz element 2 - unresolved error, upon adding this the answer boxes of the previous quiz went blank

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

//carousel 
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const scrollBar = document.querySelector('.scroll-bar');

let scrollPos = 0;

// Update scrollbar position on scroll
const updateScrollBar = () => {
  const scrollPercent = (carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth)) * 100;
  scrollBar.style.width = `${scrollPercent}%`;
}

// Scroll to the selected item
const scrollTo = (element, position) => {
  const itemHeight = items[0].offsetHeight; // Assumes all items have the same height
  const topMargin = parseFloat(window.getComputedStyle(items[0]).marginTop);
  const newPosition = position - topMargin - itemHeight / 2; // Center the selected item
  element.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });
}

// Move to the next item
const moveRight = () => {
  if (scrollPos < items.length - 1) {
    scrollPos++;
    scrollTo(carousel, items[scrollPos].offsetLeft);
  }
}

// Move to the previous item
const moveLeft = () => {
  if (scrollPos > 0) {
    scrollPos--;
    scrollTo(carousel, items[scrollPos].offsetLeft);
  }
}

// line graph

// labels along the x-axis
const years = [2010, 2013, 2015, 2017, 2019, 2021];
// For drawing the lines
const surgicalData = [6735640, 11599336, 9641253, 10766848, 11363569, 12840688];
const nonSurgicalData = [7371211, 11874937, 12055418, 12623694, 13618735, 17598888];
const totalData = [14106851,23474273, 21696671,23390542, 24982304, 30439576];

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
      text: 'Number of surgical and non-surgical cosmetic procedures over the years'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 5000000,
          max: 32000000
        }
      }]
    }
  }
});
    
//stacked bar chart 

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
                  max: 20000, 
                },
                type: 'linear',
              }]
            },
            responsive: true,
            maintainAspectRatio: false,
          }
        });