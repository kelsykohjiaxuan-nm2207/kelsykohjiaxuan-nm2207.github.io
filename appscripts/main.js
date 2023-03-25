    // Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem 
    // Source: https://digitaluniversity.womendeliver.org/wp-content/uploads/2020/05/Mod-1-2017-Dove-Global-Girls-Beauty-and-Confidence-Report.pdf
    const selfEsteem = ["Low self-esteem", "Medium self-esteem", "High self-esteem"];
    const lowSE = [70, 30];  // Percentages
    const medSE = [60, 40];
    const highSE = [50, 50];

    new Chart("beauty-pressure", {//!--Notice here we put the id of the "new chart" we created in the html part.
                type: "bar",
                data: {
                    labels: ["Felt pressure to be beautiful", "Did not feel pressure to be beautiful"],
                    datasets: [{
                        label: "Percentage of girls with low self-esteem who felt pressure to be beautiful",
                        data: lowSE,
                        backgroundColor: "hsla(351,15%,45%,0.8)", 
                borderColor: "hsla(351,15%,45%,1)"
                },
                {
                    label: "Percentage of girls with medium self-esteem who felt pressure to be beautiful",
                    data: medSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(342,37%,63%,0.8)", 
                    borderColor: "hsla(342,37%,63%,1)"
                }, 
                {
                    label: "Percentage of girls with high self-esteem who felt pressure to be beautiful",
                    data: highSE,
                    borderWidth: 2,
                    backgroundColor: "hsla(344,100%,95%,0.8)", 
                    borderColor: "hsla(345,100%,85%,1)"
                },
            ],},
            options: {
              title: {
                display: true,
                text: 'Percentage of girls who felt pressure to be beauty, by level of self-esteem'
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

// donut chart 
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

// quiz element 

const questions = [
  {
    question: "How many billion dollars do you think have been lost in the US due to body dissatisfaction?",
    answers: [
      { text: "87", correct: false },
      { text: "121", correct: true },
      { text: "290", correct: false },
      { text: "305", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons-container");

let currentQuestionIndex = 0;
let hasShownQuizAlert = false;

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

function resetQuiz() {
  currentQuestionIndex = 0;
  answerButtonsElement.innerHTML = "";
  showQuestion(questions[currentQuestionIndex]);
  showAnswers(questions[currentQuestionIndex]);
}

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

window.addEventListener("scroll", function () {
  if (!hasShownQuizAlert && (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
  )) {
    alert("Please try the quiz!");
    hasShownQuizAlert = true;
  }
});

resetQuiz();

