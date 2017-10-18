// var letterConstructor = function(letter) {
// 	this.letter = letter;
// 	this.show = false;
// 	this.createLetter = function() {
// 		return this.show ? this.letter : "_";
// 	}
// };

// module.exports = letterConstructor;

//------------------------------------------
// sam's code
// var fs = require('fs');
// var word = require('./word.js');

// var Letters = function (word, letter) {
// 	this.wordArr = [];

// 	this.letter = function (word) {
// 		this.wordArr.push(word);
// 	}
// }
//--------------------------------------------

// var request = require('request');
var inquirer = require('inquirer');
var word = require('./word.js');
var answerSpaces = [];
//var letters;
var guesses = 10;
//var blankWord = "";
//console.log(word)
// function for creating spaces, then run game
function calculateSpaces() {
	var JamesWord = new word();
	var blankWord = JamesWord.James(); // function within a function (see 11.4 example)
	console.log(blankWord)

	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		var letters = blankWord.length;
		console.log(letters);
	// then run function for user guesses
	//playGame();
//};

//function playGame(answers) {
	inquirer.prompt({
		name: 'guess',
		type: 'input',
		message: 'Guess Letter'
	}).then(function (answers){
		var userGuess = answers.guess;
		console.log(userGuess);
		for (var j = 0; j < blankWord.length; j++) {
			if (userGuess === blankWord[j]) {
				answerSpaces[j] = userGuess;
				letters--; //used to calculate if user will lose
			} else {
				guesses--;
			}
		}
		console.log(answerSpaces);
	});
	
};

// take user guesses, compare against word, keeps track of guesses, when done reset

// reset function for variables, then run spaces() again which then leads to game and so on

calculateSpaces();

// inquirer prompt would you like to play?


