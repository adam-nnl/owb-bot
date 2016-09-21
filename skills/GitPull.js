module.exports = function(skill, info, bot, message) {
  bot.reply(message,'This will be a git pull from remote/master to local/master' );
    require('simple-git')()
         .pull(function(err, update) {
            if(update && update.summary.changes) {
              bot.reply(message,'Git pull complete! :)' );
            }
         });
};
