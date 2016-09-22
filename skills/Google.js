module.exports = function(skill, info, bot, message, db) {
    var regex = /google (.*)/i;
    var result = regex[Symbol.match](message.text);
    var search_str = require('querystring').escape(result[1]);
    bot.reply(message,':mag: Let me Google that for you!- ' + 'https://www.google.com/?#q=' + search_str );
};
