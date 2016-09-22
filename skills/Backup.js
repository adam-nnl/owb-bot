module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;

  bot.reply(message,'This will be a git commit and push from local/master to remote/master' );
    require('simple-git')()
         .add('./*')
         .commit("bot commit initiated by: " + name )
         //.addRemote('origin', 'https://github.com/adam-nnl/owb-bot')
         .push(['-u', 'origin', 'master'], function () {
            // done. 
         });
  bot.reply(message,'Git commit and push complete! :D' );
  
}) 
  
};
