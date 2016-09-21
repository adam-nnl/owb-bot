module.exports = function(skill, info, bot, message) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;
    bot.reply(message, 'http://foaas.com/' + fuckArray[randomFuck] + '/' + name + '/' + bot.identity.name);
    }) 
  
  bot.reply(message,'This will be a git push backup to remote master' );
    require('simple-git')()
         .add('./*')
         .commit("bot commit!")
         //.addRemote('origin', 'https://github.com/adam-nnl/owb-bot')
         .push(['-u', 'origin', 'master'], function () {
            // done. 
         });
  bot.reply(message,'Git commit and push complete!' );
};
