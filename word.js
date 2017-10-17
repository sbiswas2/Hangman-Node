// var letterConstructor = require("./letter.js");

// // var word = "";

// function WordConstructor(word) {
// 	this.word = word;
// 	this.letters = [];
// 	this.getLetters = function() {
// 		for (var i = 0; i < this.letters.length; i++) {
// 			this.letters.push(new letterConstructor(this.letters[i]));
// 		}
// 		return this.letter.renderLetter;
// 	}

// 	this.checkLetter = function(userGuess) {
// 		for (var i = this.letters.length - 1; i >= 0; i--) {
// 			this.letters[i]
// 			if (this.letters[i].letter = userGuess) {
// 				this.letters[i].show = true;
// 			}
// 		}
// 	}

// 	this.renderWord = function() {
// 		var string = "";
// 		for (var i = 0; i < this.letters.length; i++) {
// 			string += this.letters[i].renderLetter();
// 		}
// 		return string;
// 	}
// }

// var currentWord = new WordConstructor ("Eagles");

// var wordLetters = currentWord.getLetters();

// console.log(word.renderWord());

//------------------------------
// sam's code

// var fs = require('fs');
// wordBank = ['par', 'birdie'];

// var TheWord = function (word) {
// 	this.word = wordBank[Math.floor(Math.random() * wordBank.length)];
// 	console.log(this.word);
// 	this.wordArr = [];
// 		this.wordArr.push(this.word);
// 		for (var i = 0; i < this.word.length; i++) {
// 			this.wordArr[i] = "_";
// 		}
// 		console.log(this.wordArr);
// }
// TheWord();
// module.exports = TheWord;
//-------------------------------

var fs = require('fs');
// reads list of words and stores them into an array
var readWords = function () {
	this.James = function(){
			fs.readFile("wordbank.txt", "utf8", function(error, data) {
		  	if (error) {
		  		console.log(error);
		  		return;
		  	}
		  	var phrase = data.toString().split('\n');
		  	var blankWord = phrase[Math.floor(Math.random() * phrase.length)];
		  	console.log(blankWord);
			});
	}
};

module.exports = readWords;
