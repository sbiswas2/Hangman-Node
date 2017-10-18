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
var letters;
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
		letters = blankWord.length;
	// then run function for user guesses
	playGame();
};

function playGame(answers) {
	inquirer.prompt({
		name: 'guess',
		message: 'Guess Letter'
	}).then(function (answers){
		console.log(answers);
	});
};

// take user guesses, compare against word, keeps track of guesses, when done reset

// reset function for variables, then run spaces() again which then leads to game and so on

calculateSpaces();




