module.exports = function(skill, info, bot, message) {
    var builtinPhrases = require('../builtins');
    var customPhrases = require('../custom-phrases.json');
   
    //bot.reply(message,'These are my current commands: ' );
    bot.reply(message,'Say `!TRAIN` to begin a custom skill training session.' );
    bot.reply(message,'These are my current built-in commands: ' );
    for (var key in builtinPhrases) {
        if (builtinPhrases.hasOwnProperty(key)) {
            bot.reply(message, '*Command:* ' + key);
            bot.reply(message, '*Key words/phrases:* ' + builtinPhrases[key]);
        }
    }
    
    bot.reply(message,'These are my current custom-added commands: ' );
    for (var key2 in customPhrases) {
        if (customPhrases.hasOwnProperty(key2)) {
            bot.reply(message, '*Command:* ' + key2);
            bot.reply(message, '*Key words/phrases:* ' + customPhrases[key2]);
        }
    }
    
};
