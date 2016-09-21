module.exports = function(skill, info, bot, message) {
  bot.reply(message,'This will be a git pull from remote master to local master' );
    require('simple-git')()
         //.add('./*')
         //.commit("bot commit!")
         //.addRemote('origin', 'https://github.com/adam-nnl/owb-bot')
         //.push(['-u', 'origin', 'master'], function () {
            // done. 
         });
  bot.reply(message,'Git pull complete' );
};
