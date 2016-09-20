module.exports = function(skill, info, bot, message) {
  var simpleGit = require('simple-git')( workingDirPath );
  bot.reply(message,'This will be a git push backup to remote master' );
};
