module.exports = function(skill, info, bot, message) {
    var appRoot = process.cwd();   
    var builtinPhrases = require('../builtins');

    var customPhrases = require('../custom-phrases.json');
    //var customPhrases;
    //console.log()
    //try {
    //    customPhrasesText = fs.readFileSync('../custom-phrases.json').toString();
    //} catch (err) {
    //    throw new Error('Uh oh, Bottie could not find the custom-phrases.json file, did you move it?');
    //}
    
    //try {
    //    customPhrases = JSON.parse(customPhrasesText);
    //} catch (err) {
    //    throw new Error('Uh oh, custom-phrases.json was not valid JSON! Fix it, please? :)');
    //}


//eachKey(customPhrases, Bottie.Teach);
//eachKey(builtinPhrases, Bottie.Teach);
   
    bot.reply(message,'These are my current commands: ' );
    
    bot.reply(message,'Built-in commands: ' );
    for (var key in builtinPhrases) {
        if (builtinPhrases.hasOwnProperty(key)) {
            //bot.reply(message,'These are my current commands: ' );
            bot.reply(message, key + " -> " + builtinPhrases[key]);
            console.log(key + " -> " + builtinPhrases[key]);
        }
    }
    
    bot.reply(message,'Custom-added commands: ' );
    for (var key in customPhrases) {
        if (customPhrases.hasOwnProperty(key)) {
            //bot.reply(message,'These are my current commands: ' );
            bot.reply(message, key + " -> " + customPhrases[key]);
            console.log(key + " -> " + customPhrases[key]);
        }
    }
    
};
