'use strict';

// This is another way of selecting specific parts of html
//but this is also like classes and not just individual things
//console.log(document.querySelector('.message')).textContent;

//this is kind of brothers with
//console.log(document.getElementbyId('.message').textContent);

// the ending is what you need such as
//  .textContent
//  .value

//----------------------------------------------------------------------

var myNumber = Math.floor(Math.random() * 20 + 1);
console.log("The random number is " + myNumber);
var score = 20;
var highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;

  if (score > 0) {

    var guess = Number(document.querySelector('.guess').value);
    console.log("guess is "+  guess + " & score is = "+score);

    if(guess >= 0 && guess <= 20 && guess != ""){
      if (guess > myNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        console.log("first score -- = "+ score);
  
        document.querySelector('.message').textContent = 'Too big!';
      } else if (guess < myNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        console.log("second score -- = " + score);
  
        document.querySelector('.message').textContent = 'Too small!';
      } else if (guess == myNumber) {
        console.log("This is score  = "+ score);
        document.querySelector('.message').textContent = 'You got it!';
        document.querySelector('.number').textContent = myNumber;
        document.body.style.background = 'green';
  
        if (score > highscore) {
          highscore = score;
          console.log(highscore);
          document.querySelector('.highscore').textContent = highscore;
        }

      }
    }else {
      document.querySelector('.message').textContent = 'Invalid input';
    }

  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.number').textContent = myNumber;
  }
});



document.querySelector('.again').addEventListener('click', function () {
  myNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.background = '#222';
  document.querySelector('.number').textContent = '?';
  document.getElementById('input_number').value = '';

  
});


/*document.querySelector('.check').addEventListener('click', function () {
    Need condition whgere no value entered.
    document.querySelector('.score').textContent = score;

    if (score > 0) {
      score = score - 1;
      console.log('Score under first if = ' + score);
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess);

      if (!guess) {
        document.querySelector('.message').textContent = 'No Number entered';
      }

      if (guess > myNumber) {
        document.querySelector('.message').textContent = 'Too big!';
      } else if (guess < myNumber) {
        document.querySelector('.message').textContent = 'Too small!';
      } else if (guess == myNumber) {
      
        document.querySelector('.message').textContent = 'You got it!';
        document.querySelector('.number').textContent = myNumber;
        document.body.style.background = 'green';
        
        if (score > highscore) {
          highscore = score;
          console.log(highscore);
          document.querySelector('.highscore').textContent = highscore;
        }

        
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.number').textContent = myNumber;
    }
  });*/