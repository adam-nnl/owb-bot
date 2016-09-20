module.exports = function(skill, info, bot, message) {
    var builtinPhrases = require('../builtins');
    var customPhrases = require('../custom-phrases.json');
   
    bot.reply(message,'These are my current commands: ' );
    
    bot.reply(message,'Built-in commands: ' );
    for (var key in builtinPhrases) {
        if (builtinPhrases.hasOwnProperty(key)) {
            bot.reply(message, key + " -> " + builtinPhrases[key]);
            console.log(key + " -> " + builtinPhrases[key]);
        }
    }
    
    bot.reply(message,'Custom-added commands: ' );
    for (var key in customPhrases) {
        if (customPhrases.hasOwnProperty(key)) {
            bot.reply(message, key + " -> " + customPhrases[key]);
            console.log(key + " -> " + customPhrases[key]);
        }
    }
    
};
