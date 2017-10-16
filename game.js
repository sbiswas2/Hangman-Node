var inquirer = require('inquirer');
var word = require("./word");
var count = 9;
var userGuess = [];

// find word function?

// enter letter function?
	// recursion function where it loops until count of blank spaces = 0


var Choice = function(word) {
	if (count > 0) {
		inquirer.prompt([{
			name: 'question',
			message: this.wordArr
		}
		]).then(function(answers) {
			userGuess.push(answers);
			console.log(userGuess);
			if (userGuess === this.wordArr) {
				console.log('correct');
				console.log(count);
			} else {
				console.log('wrong');
				count--;
				console.log(count);
			}
		})
	}
}

Choice();