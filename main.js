// count clicks 

let counter1 = 0;

document.getElementById("counter").addEventListener("click", function () {

  counter1++;
  console.log(counter1);
  
  document.getElementById("cookies").innerText = "Thank you, I have now received " + counter1 + " cookies.";
  
});



// add event listener to reflect clicks in a p element 


// add event listener 

var numcookies = document.getElementById("cookies");
numcookies.addEventListener("click", function(){countcookies();});



