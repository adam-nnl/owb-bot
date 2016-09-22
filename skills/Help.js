module.exports = function(skill, info, bot, message, db) {
    var builtinPhrases = require('../builtins');
    var customPhrases = require('../custom-phrases.json');
    //customPhrases = JSON.parse(customPhrasesText);
    var response = '';
    var response2 = '';

    bot.reply(message,'Hi! My name is <@' + bot.identity.name + '>. I\'m your super-awesome, extensible, user-programmable slack assistant! If you need something just direct mention/messsage me with the correct key word or phrase. If you need something I can\'t provide use the `!TRAIN` method to add a whole new funtion!' + '\n' + 'These are my current built-in commands and their key words/phrases: ');
    for (var key in builtinPhrases) {
        if (builtinPhrases.hasOwnProperty(key)) {
            response = response + '*Command:* ' + key + '\n' + '*Key words/phrases:* ' + builtinPhrases[key] + '\n'
        }
    }
    bot.reply(message, response);    
    
    bot.reply(message,'You can also teach me new skills! Just tell me `!TRAIN` to begin a custom skill training session.' + '\n' + 'These are my current custom-added commands: ' );
    for (var key2 in customPhrases) {
        if (customPhrases.hasOwnProperty(key2)) {
            response2 = response2 + '*Command:* ' + key2 + '\n' + '*Key words/phrases:* ' + customPhrases[key2] + '\n'
        }
    }
    bot.reply(message, response2); 
};
