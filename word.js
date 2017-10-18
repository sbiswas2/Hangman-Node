var fs = require('fs');
var readWords = function () {
	this.James = function(){ // thank you James with helping me with this
		var phrase = ['car', 'boat', 'airplane', 'helicopter', 'truck', 'van', 'train'];
		var blankWord = phrase[Math.floor(Math.random() * phrase.length)];
		return blankWord;	
	}
};

module.exports = readWords;