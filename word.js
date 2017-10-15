var letterConstructor = require("./letter.js");

// var word = "";

function WordConstructor(word) {
	this.word = word;
	this.letters = [];
	this.getLetters = function() {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters.push(new letterConstructor(this.letters[i]));
		}
		return this.letter.renderLetter;
	}

	this.checkLetter = function(userGuess) {
		for (var i = this.letters.length - 1; i >= 0; i--) {
			this.letters[i]
			if (this.letters[i].letter = userGuess) {
				this.letters[i].show = true;
			}
		}
	}

	this.renderWord = function() {
		var string = "";
		for (var i = 0; i < this.letters.length; i++) {
			string += this.letters[i].renderLetter();
		}
		return string;
	}
}

var currentWord = new WordConstructor ("Eagles");

var wordLetters = currentWord.getLetters();

console.log(word.renderWord());

