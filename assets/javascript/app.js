// Tell document to wait until whole js and jquery are loaded to run
$(document).ready(function() {
  
// Create clock countdown timer
// My clock will not play. I want it to run when I click the "start" button but it's not happening
  var index = 0;
  var countdownTimer = {
    time : 30,
    reset: function() {
      this.time = 30;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
        console.log(countdownTimer.time);
//        $('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };

  // Set variables for questions and answers

  var correct = 0;
  var wrong = 0;
  
  var q1 = {
  question : "Who is Radio Raheem?",
  possibleAnswers : [
        "A. The Founder of Radio City Music Hall",
        "B. Boombox Toting Philospher Extrodanaire", 
        "C. Bond Super Villian", 
        "D. None of the Above",
    flags[false, true, false, false],
    answer: "B. Boombox Toting Philospher Extrodanaire"
};

  var q2 = {
  question : "What Is the Average Wind Speed Velocity of an Unladen Swallow?",
  possibleAnswers : [
        "A. Do You Mean African or European?",
        "B. Faster Than a Speeding Locomotive", 
        "C. Same As School Zone Speed Limit", 
        "D. 11 Meters Per Second",
    flags : [true, false, false, false],
    answer : "A. Do You Mean African or European?"
};

  var q3 = {
  question : "What Is the Correct Ignition Timing of a 1955 Bel Air Chevrolet?",
  possibleAnswers : [
        "A. Immediately After Breakfast",
        "B. Two Hairs Past a Freckle", 
        "C. High Noon", 
        "D. Four Degrees Before Top-Dead-Center",
    flags : [false, true, false, true],
    answer : "D. Four Degrees Before Top-Dead-Center"
};

  var q4 = {
  question : "Why Didn't Neo Swallow the Blue Pill?",
  possibleAnswers : [
        "A. He'd Need to Call a Doctor After 4 Hours",
        "B. He Wanted to Escape the Matrix", 
        "C. Blue Was Not His Boy", 
        "D. He Wasn't Feeling Sad",
    flags : [false, true, false, false],
    answer : "B. Boombox Toting Philospher Extrodanaire"
};

  var q5 = {
  question : "Why Did the Gunman Shoot Up Navin Johnson's Gas Station?",
  possibleAnswers : [
        "A. To Protest the Oil Emgargo of the 70s",
        "B. He Was High on PCP", 
        "C. Navin Was a Stupid Name", 
        "D. He Hated Those Cans!",
    flags : [false, false, false, true],
    answer : "D. He Hated Those Cans!"
};

  var q6 = {
  question : "Who Was Buddy the Elf's Real Dad?",
  possibleAnswers : [
        "A. Bob Newhart",
        "B. Sonny Corleone", 
        "C. Commuter Number Two", 
        "D. Bad Santa",
    flags : [false, true, false, false],
    answer : "B. Sonny Corleone"
};

  var q7 = {
  question : "Can You Triple Stamp a Double Stamp?",
  possibleAnswers : [
        "A. Hell No",
        "B. Hells Yeah", 
        "C. What In Tarnation Are You Talking About?", 
        "D. Depends on Weight of Envelope",
    flags : [true, false, false, false],
    answer : "A. Hell No"
};

  var q8 = {
  question : "Who Ordered the Code Red?",
  possibleAnswers : [
        "A. Private Benjamin",
        "B. Lieutenant Dan", 
        "C. Colonel Jessup", 
        "D. Seargant York",
    flags : [false, false, true, false],
    answer : "C. Colonel Jessup"
};

  var q9 = {
  question : "Tower This is Ghost Rider Requesting a Flyby?",
  possibleAnswers : [
        "A. Well, If You Ask Nicely",
        "B. Negative Ghost Rider the Pattern is Full", 
        "C. Sorry, We Already Let Iceman Do It", 
        "D. You Need to Wait 30 Minutes After Eating",
    flags : [false, true, false, false],
    answer : "B. Negative Ghost Rider the Pattern is Full"
};

  var q10 = {
  question : "Why is Coding Hard?",
  possibleAnswers : [
        "A. My Code Won't Work And I Don't Know Why!!!!",
        "B. I'm Not Very Smart", 
        "C. Engineers Purposely Make Stuff Difficult", 
        "D. All of the Above",
    flags : [false, false, false, true],
    answer : "D. All of the Above"
};


// Setting array, functions and conditions for questions & answers

  var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

  function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//  index = index++;
//  console.log(index);
//}

  function setup() {
    index = 0;
    $('.question').append('<button id="startButton">Start</button>');
    $('#startButton').on('click', function() {
      $(this).hide();
      countdownTimer.start();
      loadQuestion(index);
  });
}   

  function getAnswer() {

//  nextQuestion();
    $('.answerChoice').on('click', function() {
      console.log('alert', index);
      index++;
      console.log('click', index);
      $(".question").text('');
      $("#buttonA").text('');
      $("#buttonB").text('');
      $("#buttonC").text('');
      $("#buttonD").text('');
      loadQuestion();
  })
}

  function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

  function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
}

  function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

    $("#startButton").click(countdownTimer.start);

    setup();
    $('.answerChoice').on('click', function() {
    console.log($(this));
    if(this.id == 'buttonA') {
      var answerChosen = 'A';
    } else if(this.id == 'buttonB') {
      answerChosen = 'B';
    } else if (this.id == 'buttonC') {
      answerChosen = 'C';
    } else if (this.id == 'buttonD') {
      answerChosen = 'D';
    } 
  if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
    answerCorrect();
    } else if (answerChosen == 'A') {
    answerWrong();
    }
  if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
    answerCorrect();
    } else if (answerChosen == 'B') {
    answerWrong();
    }
  if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
    answerCorrect();
    } else if (answerChosen == 'C') {
    answerWrong();
    }
  if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
    answerCorrect();
    } else if (answerChosen == 'D') {
    answerWrong();
    }

    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    index++;
      if (index < questionArray.length) {
      loadQuestion(index);
      } else {
    $(".answerchoice").hide();
      showScore();
    }





// // Setting audio to play if someone picks wrong answer
//   var audio = new Audio("loser.mp3");