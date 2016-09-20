module.exports = function(skill, info, bot, message) {
    var builtinPhrases = require('../builtins');
    var customPhrases = require('../custom-phrases.json');
   
    //bot.reply(message,'These are my current commands: ' );
    
    bot.reply(message,'These are my current built-in commands: ' );
    for (var key in builtinPhrases) {
        if (builtinPhrases.hasOwnProperty(key)) {
            bot.reply(message, '*Command:* ' + key);
            bot.reply(message, '*Key words/phrases:* ' + builtinPhrases[key]);
        }
    }
    
    bot.reply(message,'These are my current custom-added commands: ' );
    for (var key in customPhrases) {
        if (customPhrases.hasOwnProperty(key)) {
            bot.reply(message, '*Command:* ' + key);
            bot.reply(message, '*Key words/phrases:* ' + customPhrases[key]);
        }
    }
    
};
