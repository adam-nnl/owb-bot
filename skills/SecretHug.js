module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;
    bot.reply(message, 'under development');
    var userData = message.text.match(/<@([A-Z0–9]{9})>/); // parse the text for user's 9 character id

  if (userData) {
    // if there is a user named send ze hugs!
  } else {
    bot.reply(message, 'You didn\'t name anyone…were you the one that needed a hug ' + name + '?');
  }
        
    })  

};
