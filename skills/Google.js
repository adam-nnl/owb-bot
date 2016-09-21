module.exports = function(skill, info, bot, message) {
    //'google (.*)'
    var query = message.match[google (.*)];
    
    //var query = message.text.replace(skill,'');
    var search_str = require('querystring').escape(query);
    bot.reply(message,':mag: Let me Google that for you!- ' + 'https://www.google.com/?#q=' + search_str );
};
