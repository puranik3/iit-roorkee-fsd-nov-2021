function Question( text, choices, answer ) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function( answer ) {
    return this.answer === answer;
};

/**
 * EXERCISE
 * Create the Quiz class
 * - questions (input in constructor - array of questions)
 * - score (initially 0)
 * - questionIndex (initially 0)
 * 
 * Methods
 * getQuestionByIndex - return the question object for questionIndex
 * checkOptionWithAnswer - answer is checked against correct answer of current question - true of false is returned - please use the question object's isCorrectAnswer method
 */

const questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

console.log( questions );

// If implemented correctly this should be the output
console.log( questions[0].isCorrectAnswer( "Functions" ) ); // true
console.log( questions[0].isCorrectAnswer( "CSS" ) ); // false