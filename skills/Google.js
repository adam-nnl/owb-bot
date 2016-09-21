module.exports = function(skill, info, bot, message) {
    var regex = /google (.*)/i;
var result = regex[Symbol.match](message.text);
console.log(result);  // ["2016", "01", "02"]
    
    //'google (.*)'
    //var regex = /google (.*)/i;
    //var query = message.text.match[regex];
    
    //var query = message.text.replace(skill,'');
    //var search_str = require('querystring').escape(query[1]);
    //bot.reply(message,':mag: Let me Google that for you!- ' + 'https://www.google.com/?#q=' + search_str );
};
