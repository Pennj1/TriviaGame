var questions = [{
    question: "What color is the 1st o in google?",
    choices: ["red", "blue", "green", "yellow"],
    correctAnswer: 0
}, {
    question: "What is the largest City in North Carolina?",
    choices: ["Raleigh", "Greensboro", "Charlotte", "Winston Salem"],
    correctAnswer: 2
}, {
    question: "What was Carl Winslow's profession on Family Matters",
    choices: ["Bus Driver", "Police Officer", "Firefighter", "Teacher"],
    correctAnswer: 1
}, {
    question: "What is the longest river in the world?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];
var countdown = 60;
var currentQuestion = 0;
var correctAnswers = 0;
var seconds;
var intervalId;

var x=choices = document.createElement[("Waterloo", "Baker Street", "Kings Cross", "Victoria")];
x.setAttribute("type", "radio");


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#countdown").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
}
  

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();


// $(document).ready(function(){
    
//     countdown() {
//     seconds = document.getElementById('countdown').innerHTML;
//     seconds = parseInt(seconds, 60);
 
//     if (seconds === 0) {
//       temp = document.getElementById('countdown');
//       temp.innerHTML = "all done, bye bye";
//       return;
//     }
 
//     seconds--;
//     temp = document.getElementById('countdown');
//     temp.innerHTML = seconds;
//     timeoutMyOswego = setTimeout(countdown, 60);
//   } 
 
//   countdown();
})