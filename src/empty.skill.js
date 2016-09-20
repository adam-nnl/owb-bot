
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'I understood this as ' + skill +
    ', but it is not configured to do anything yet! Contact your local code monkey :computer::monkey: and ask them to add some functionality to the javascript file for this skill.');
};
