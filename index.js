
var allQuestions = [
      {q: "1.What is the capital of Japan?",     choices: ["Osaka", "Tokyo", "Kyoto","delhi"],         answer: 1},
      {q: "2.What is the capital of Australia?", choices: ["Sydney", "Melbourne", "Canberra","delhi"], answer: 2},
      {q: "3.What is the capital of Slovakia?",  choices: ["Bratislava", "Kosice", "Nitra","delhi"],   answer: 0},
      {q: "4.What is the capital of Belarus?",   choices: ["Homyel", "Minsk", "Mogilev","delhi"],      answer: 1},
      {q: "5.What is the capital of Zambia?",    choices: ["Ndola", "Kitwe", "Lusaka","delhi"],        answer: 2},
      {q: "6.What is the capital of Eritrea?",   choices: ["Asmara", "Keren", "Teseney","delhi"],            answer: 0},
      {q: "7.What is the capital of Namibia?",   choices: ["Tsumeb", "Swakopmund", "Windhoek","delhi"],      answer: 2},
      {q: "8.What is the capital of Guyana?",    choices: ["Linden", "Georgetown", "New Amsterdam","delhi"], answer: 1},
      {q: "9.What is the capital of Azerbaijan?", choices: ["Ganja", "Sumgait", "Baku","delhi"],              answer: 2},
      {q: "10.What is the capital of Slovenia?",  choices: ["Ljubljana", "Maribor", "Celje","delhi"],         answer: 0}
    ];
document.getElementById("question").textContent = allQuestions[0].q;
document.getElementById("choice0").textContent = allQuestions[0].choices[0];
document.getElementById("choice1").textContent = allQuestions[0].choices[1];
document.getElementById("choice2").textContent = allQuestions[0].choices[2];
document.getElementById("choice3").textContent = allQuestions[0].choices[3];
var userScore = 0;
var questionNum = 0;
      function increase(){
                var a = 1;
                var textBox = document.getElementById("text");
                textBox.value = a;
                a++;
            }        
  $("#next").click(function() {
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].answer) {
    userScore++;
  }
     if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore + " out of 10.";
    }
     questionNum++;
    document.getElementById("question").textContent = allQuestions[questionNum].q;
    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];
    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];
    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
    document.getElementById("choice3").textContent = allQuestions[questionNum].choices[3];
	});
