module.exports = function(skill, info, bot, message) {
  bot.reply(message, 'http://foaas.com/everyone/' + bot.identity.name);
  //bot.reply(message, 'I understood this as ' + skill + ', but you haven\'t configured how to make me work yet! Tell your local code monkey to fill in the code module for ' + skill);
};
