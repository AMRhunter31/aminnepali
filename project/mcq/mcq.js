// src code to fetch url 
let src = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
// questions array to store questions with options
let questions = [];
let quesElement;
let score = 0;
let index = 0;

// template class for multichoice questions
function Quiz(Q,choices,correctAns){
	this.question = Q;
	this.choices = choices;
	this.correctAns = correctAns;
}
// function for fetching data and initiating question objects
function fetchURL(){
	questions = [];
	$.getJSON(src,function(response){
		var Qs = response.results
		for(var i =0; i< Qs.length; i++){
			var choices = Qs[i].incorrect_answers;
			choices.push(Qs[i].correct_answer);
			// shuffling the options 
			choices.sort(function(a,b){
				return 0.5 - Math.random();
			})
			//declaring instance of Quiz class
			questions[i] = new Quiz(
				Qs[i].question, choices, Qs[i].correct_answer  
			);
		}
		renderUI();
		
	});
}
// this function renders the html to the page with current question and options
function renderUI(){
	if (index == questions.length){
		index = 0;
		displayScore();
		return;
}

	var OptionsEl = "";
	$("#ques_no").text(index + 1);
	$("#total").text(questions.length);

	quesElement = $("<p class='question'>" + questions[index].question + "</p>");

	questions[index].choices.forEach(function(el,ind){
		OptionsEl += "<label class='option'>";
		OptionsEl += "<input type='radio' name='choice' value='" + el + "'/>";
		OptionsEl += "<span class='padding'>" + el + "</span></label>";
	});

	$("#choices").html(OptionsEl);
	$(".option").hide().fadeIn(800);
  
  // escaping common special characters
	function escapeHtml(unsafe) {
    	return unsafe
         	.replace(/&/g, "&amp;")
         	.replace(/</g, "&lt;")
         	.replace(/>/g, "&gt;")
         	.replace(/"/g, "&quot;")
         	.replace(/%/g, "&percnt;")
         	.replace(/\$/g, "&dollar;")
         	.replace(/'/g, "&#039;");
 	}

	$(".option input").on("click",function(e){
		var userAns = escapeHtml(e.target.value);
		//console.log(userAns);

		if(questions[index].correctAns == userAns){

			score = score + 1;
		}
		index = index + 1;

		renderUI();
	});
	
	$("#questions").html(quesElement);
	quesElement.hide(500).stop().fadeIn(800);
	$("#quiz").show();

}
// this function displays the final result
function displayScore(){
	
	var feedbackEle = $("#feedback");
	var feedback = "<h2>";
	var retryBtn = $("<button>Play Again</button>");
	retryBtn.attr("id","play_again");
	var diffQuiz = $("<button>Different Quiz</button>");
	diffQuiz.attr("id","diff_quiz");

	if(score > 8){
		feedback += "Exellent you did Amazing!";
	}else if(score >= 5){
		feedback += "Congrats! You passed the test";
	}else if(score < 5){
		feedback += " Better luck next time!";
	}
	feedback += "</h2><p>You scored <b>"+ score + "</b> out of <b>"+ questions.length;

	feedback += "</b></p>";
	$("#quiz").hide();
	feedbackEle.html(feedback);
	feedbackEle.append(retryBtn);
	feedbackEle.append(diffQuiz);
	feedbackEle.css("text-align","center");
	feedbackEle.show();
	
	$("#feedback button").on("click",function(){
		feedbackEle.hide();
		score = 0;
		if(this.id == "play_again"){
			$("#quiz").show();
			renderUI()
		}else{
		    fetchURL()
		}
	})
}

$(document).ready(fetchURL);







