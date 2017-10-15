// var letterConstructor = function(letter) {
// 	this.letter = letter;
// 	this.show = false;
// 	this.createLetter = function() {
// 		return this.show ? this.letter : "_";
// 	}
// };

// module.exports = letterConstructor;

var fs = require('fs');
var word = require('./word.js');

var Letters = function (word, letter) {
	this.wordArr = [];

	this.letter = function (word) {
		this.wordArr.push(word);
	}
}