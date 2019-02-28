/*
The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`
*/

var Word = require('./Word');

var inquirer = require('inquirer');

var randWord;
var wordToGuess;
var dictionary = ['Harry Potter', 'United States', 'Hello', 'Games', 'Test', 'JavaScript'];

function startGame() {

    var randNumber = Math.floor(Math.random() * (dictionary.length - 0) + 0);
    randWord = dictionary[randNumber];

    wordToGuess = new Word(randWord);

    console.log(wordToGuess.displayWord());
    timeToGuess();
}

function timeToGuess() {
    inquirer.prompt([{
        type: 'input',
        name: 'guessLetter',
        message: 'Guess a letter for the word: '
    }]).then(function (answers) {
        wordToGuess.checkChar(answers.guessLetter);
        console.log(wordToGuess.displayWord());

        var underscoreAt = wordToGuess.displayWord().indexOf('_');
        if (underscoreAt >= 0) {
            timeToGuess();
        } else {
            console.log('You Guessed the Word Correctly!');
        }
    });
}

startGame();