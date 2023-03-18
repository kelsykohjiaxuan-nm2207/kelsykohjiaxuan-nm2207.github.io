    // Average daily time spent using social media in the Asia-Pacific region in 3rd quarter of 2021, by country
    // Source: https://www-statista-com.libproxy1.nus.edu.sg/statistics/1128147/apac-daily-time-spent-using-social-media-by-country-or-region/
    const selfEsteem = ["Low self-esteem", "Medium self-esteem", "High self-esteem"];
    const SEpercentages = [50, 60, 70];  // Percentages

    const dataObj = {
        labels: selfEsteem, 
        datasets: [
            {
                label: "Percentage of girls surveyed",
                data: SEpercentages,
                borderWidth: 2,
                backgroundColor: "hsla(344,100%,95%,0.8)", 
                borderColor: "hsla(345,100%,85%,1)"
            }
        ]
    };
    new Chart("beauty-pressure", {//!--Notice here we put the id of the "new chart" we created in the html part.
                type: "horizontalBar",
                data: dataObj,
                options: {
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
               
                }
            });