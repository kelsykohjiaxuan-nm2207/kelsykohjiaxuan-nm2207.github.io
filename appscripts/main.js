    // Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem 
    // Source: https://digitaluniversity.womendeliver.org/wp-content/uploads/2020/05/Mod-1-2017-Dove-Global-Girls-Beauty-and-Confidence-Report.pdf
    const selfEsteem = ["Low self-esteem", "Medium self-esteem", "High self-esteem"];
    const lowSE = [70, 30];  // Percentages
    const medSE = [60, 40];
    const highSE = [50, 50];

    const dataObj = {
        labels: selfEsteem, 
        datasets: [
            {
                label: "Percentage of girls with low self-esteem who felt pressure to be beautiful",
                data: lowSE,
                borderWidth: 2,
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
        ]
    };
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
            ],
                options: {

                // problems adjusting title 
                  title: {
                    display: true,
                    text: ['Number of female graduates'],//set this to 'Number of female graduates','per Course'
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',},

                  // problems adjusting axis min and legend position 
                  scales: {
                    x: [{
                      display: true,
                      ticks: {
                        suggestedMin: 0,
                        max: 100,
                      }
                    }],
                    y: [{
                      ticks: {
                        suggestedMin: 0,
                        max: 100, 
                      }
                    }]}
                    }
               
                }});

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
                        plugins: {
                        title: {
                          display: true,
                          text: "Percentage of girls worldwide that felt pressure to be beautiful, by level of self-esteem",
                          fontFamily: "TrebuchetMS",
                          fontSize: 24,
                          fontColor: 'rgb(0,120,0)',
                        }},
                      responsive: true,
                      legend: {
                        display: true,
                        postition: "right",
                      },
                      }})