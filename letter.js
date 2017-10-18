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
//console.log(word)
// function for creating spaces, then run game
var spaces = function() {
	var JamesWord = new word();
	var blankWord = JamesWord.James(); // function within a function (see 11.4 example)
	console.log(blankWord)

	var answerSpaces = [];
	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		var letters = blankWord.length;
		return letters;
	// then run function for user guesses
};

// take user guesses, compare against word, keeps track of guesses, when done reset

// reset function for variables, then run spaces() again which then leads to game and so on

spaces();




