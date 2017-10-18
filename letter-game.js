var inquirer = require('inquirer');
var word = require('./word.js');
var answerSpaces = [];
var lettersLeft;
var guesses;
var blankWord;

// calling prompt
toPlay();

// prompt - would you like to play?
function toPlay() {
	inquirer.prompt({
		name: 'play',
		type: 'input',
		message: 'Would you like to play? (Y/N)'
	}).then(function (answers){
		var userInput = answers.play.toUpperCase();
		if (userInput === "Y"){
			newGame();
		} else {
			return;
		}
	});
};

// start new game and pick word
function newGame() {
	guesses = 10;
	answerSpaces = [];
	var JamesWord = new word(); // thank you James for your help
	blankWord = JamesWord.James(); // thank you James for your help

	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		lettersLeft = blankWord.length;
	// then run function for user guesses
	playGame();
};

// take user guess against chosen word
function playGame(answers) {
	var newWord = blankWord;
	inquirer.prompt({
		name: 'guess',
		type: 'input',
		message: 'Guess letter:'
	}).then(function (answers){
		guesses--;
		var userGuess = answers.guess;
		for (var j = 0; j < newWord.length; j++) {
			if (userGuess === newWord[j]) {
				answerSpaces[j] = userGuess;
				lettersLeft--; //used to calculate if user will lose
			}
		}
		console.log(answerSpaces);
		console.log("Number of guesses left: " + guesses);
		// then run checker function
		checker();
	});
};

// check to see if user won, lost, or needs to guess again
function checker() {
	var newWord = blankWord;
	if (lettersLeft === 0) {
		console.log("You Win!");
		toPlay(); // re-direct to prompt to play
	} else if (guesses === 0) {
		console.log("You Lose!  Correct Answer: " + newWord);
		toPlay(); // re-direct to prompt to play
	} else {
		playGame(); // re-direct to play game
	}
};
