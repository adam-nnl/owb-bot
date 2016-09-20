module.exports = function(skill, info, bot, message) {
    var builtinPhrases = require('./builtins')

    var customPhrasesText;
    var customPhrases;
    try {
        customPhrasesText = fs.readFileSync(__dirname + '/custom-phrases.json').toString();
    } catch (err) {
        throw new Error('Uh oh, Bottie could not find the custom-phrases.json file, did you move it?');
    }
    
    try {
        customPhrases = JSON.parse(customPhrasesText);
    } catch (err) {
        throw new Error('Uh oh, custom-phrases.json was not valid JSON! Fix it, please? :)');
    }


//eachKey(customPhrases, Bottie.Teach);
//eachKey(builtinPhrases, Bottie.Teach);
   
    bot.reply(message,'These are my current commands: ' );
    
    bot.reply(message,'Built-in commands: ' );
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            bot.reply(message,'These are my current commands: ' );
            //console.log(key + " -> " + p[key]);
        }
    }
    
    bot.reply(message,'Custom-added commands: ' );
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            bot.reply(message,'These are my current commands: ' );
            //console.log(key + " -> " + p[key]);
        }
    }
    
};
