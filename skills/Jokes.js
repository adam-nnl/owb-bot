module.exports = function(skill, info, bot, message) {
    var jokesArray = require('./jokes.json');
    var randomJoke = Math.floor(Math.random()*jokesArray.length);   
    bot.reply(message, jokesArray[randomJoke]);
};
