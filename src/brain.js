
var NLP = require('natural');

module.exports = Brain; 

function Brain() {
  this.classifier = new NLP.LogisticRegressionClassifier();
  this.minConfidence = 0.7;
}

Brain.prototype.teach = function(label, phrases) {
  phrases.forEach(function(phrase) {
    console.log('Ingesting example for ' + label + ': ' + phrase);
    this.classifier.addDocument(phrase.toLowerCase(), label);
  }.bind(this));
  return this;
};

Brain.prototype.think = function() {
  this.classifier.train();
  return this;
};

Brain.prototype.interpret = function(phrase) {
  var guesses = this.classifier.getClassifications(phrase.toLowerCase());
  var guess = guesses.reduce(toMaxValue);
  return {
    probabilities: guesses,
    guess: guess.value > this.minConfidence ? guess.label : null
  };
};

Brain.prototype.invoke = function(skill, info, bot, message, db) {
  var skillCode;
  console.log('Grabbing code for skill: ' + skill);
  try {
    skillCode = require('../skills/' + skill);
  } catch (err) {
    throw new Error('The invoked skill doesn\'t exist!');
  }
  console.log('Running skill code for ' + skill + '...');
  skillCode(skill, info, bot, message, db);
  return this;
};

function toMaxValue(x, y) {
  return x && x.value > y.value ? x : y;
}
