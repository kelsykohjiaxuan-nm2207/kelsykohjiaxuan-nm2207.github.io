    // Chart 1: Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem 
    // Source: https://digitaluniversity.womendeliver.org/wp-content/uploads/2020/05/Mod-1-2017-Dove-Global-Girls-Beauty-and-Confidence-Report.pdf
    const selfEsteem = ["Low self-esteem", "Medium self-esteem", "High self-esteem"];
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
                        backgroundColor: "hsla(351,15%,45%,0.8)", 
                borderColor: "hsla(351,15%,45%,1)"
                },
                {
                    label: "Medium self-esteem",
                    data: medSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(342,37%,63%,0.8)", 
                    borderColor: "hsla(342,37%,63%,1)"
                }, 
                {
                    label: "High self-esteem",
                    data: highSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(344,100%,95%,0.8)", 
                    borderColor: "hsla(345,100%,85%,1)"
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
                        'hsla(93, 7%, 68%, 0.8)',
                        'hsla(19, 42%, 79%, 0.8)',
                      ],
                      hoverOffset: 4
                    }]
                  };

                  new Chart("BD-cost",
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
      { text: "~200 billion", correct: true },
      { text: "~250 billion", correct: false },
      { text: ">300 billion", correct: false },
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

// if quiz is not attempted and user has scrolled past quiz, alert 
// window.addEventListener("scroll", function () {
//   if (!hasShownQuizAlert && hasScrolledPastQuiz && currentQuestionIndex === 0) {
//     alert("Please try the quiz!");
//     hasShownQuizAlert = true;
//   }
// });

resetQuiz();

// quiz element 2 - unresolved error, upon adding this the answer boxes of the previous quiz went blank

// const quiz2 = [
//   {
//     question2: "Women reported feeling less confident in their body after watching reality TV shows - true or false?",
//     // insert options and determine which button is the right answer
//     answers: [
//       { text: "True", correct: true },
//       { text: "False", correct: false },

//     ],
//   },
// ];

// const quizContainer2 = document.getElementById("quiz-container2");
// const questionElement2 = document.getElementById("question2");
// const answerButtonsElement2 = document.getElementById("answer-buttons-container2");

// let QuestionIndex = 0;
// let ShownQuizAlert = false;
// let ScrolledPastQuiz = false;

// function showQuestion(question) {
//   questionElement.innerText = question.question;
// }

// function showAnswers(question) {
//   question.answers.forEach((answer, index) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("answer-button2"); // Add answer-button class
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// }

// // function to reset the quiz for viewers 
// function resetQuiz() {
//   QuestionIndex = 0;
//   answerButtonsElement.innerHTML = "";
//   showQuestion(questions[QuestionIndex]);
//   showAnswers(questions[QuestionIndex]);
// }

// // event for when an answer is chosen. if correct, alert correct; if wrong, alert wrong. 
// function selectAnswer(event) {
//   const selectedButton = event.target;
//   const isCorrect = selectedButton.dataset.correct;
//   if (isCorrect) {
//     alert("Correct!");
//   } else {
//     alert("Wrong answer.");
//   }
//   QuestionIndex++;
//   if (QuestionIndex < questions.length) {
//     answerButtonsElement.innerHTML = "";
//     showQuestion(questions[QuestionIndex]);
//     showAnswers(questions[QuestionIndex]);
//   } else {
//     resetQuiz();
//   }
// }

// // added this section to make sure the "please try this quiz" alert only popped up when users scroll past the quiz section without attempting - in original code, the "please try this quiz" alert popped up on refresh
// // check if user has scrolled past quiz
// window.addEventListener("scroll", function () {
//   if (quizContainer.getBoundingClientRect().bottom < 0) {
//     ScrolledPastQuiz = true;
//   }
// });

// // if quiz is not attempted and user has scrolled past quiz, alert 
// window.addEventListener("scroll", function () {
//   if (!ShownQuizAlert && ScrolledPastQuiz && QuestionIndex === 0) {
//     alert("Please try the quiz!");
//     ShownQuizAlert = true;
//   }
// });

// resetQuiz();

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
  element.scrollTo({
    left: position,
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

// Add event listeners for buttons and scrollbar
document.querySelector('.left-btn').addEventListener('click', moveLeft);
document.querySelector('.right-btn').addEventListener('click', moveRight);
carousel.addEventListener('scroll', updateScrollBar);
scrollBar.addEventListener('click', (event) => {
  const scrollPercent = event.offsetX / scrollBar.offsetWidth;
  const scrollPos = scrollPercent * (carousel.scrollWidth - carousel.clientWidth);
  scrollTo(carousel, scrollPos);
});
