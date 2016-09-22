module.exports = function(skill, info, bot, message) {
  bot.storage.self_ref = bot.storage;

util = require("util");

var obj_str = util.inspect(bot.storage);
console.log(obj_str);
  
 // console.log(JSON.stringify(bot, null, 4));
  
//bot.storage.users.save({id: message.user, foo:'bar'}, function(err) { console.log('yes'); });

/*bot.memory_store.channels[channel_id]
bot.memory_store.users[user_id]
bot.memory_store.teams[team_id]

botkit.memory_store.channels[channel_id]
botkit.memory_store.users[user_id]
botkit.memory_store.teams[team_id]

  controller.storage.users.save({id: message.user, foo:'bar'}, function(err) { ... });
  controller.storage.users.get(id, function(err, user_data) {...});
  controller.storage.users.all(function(err, all_user_data) {...});

  controller.storage.channels.save({id: message.channel, foo:'bar'}, function(err) { ... });
  controller.storage.channels.get(id, function(err, channel_data) {...});
  controller.storage.channels.all(function(err, all_channel_data) {...});

  controller.storage.teams.save({id: message.team, foo:'bar'}, function(err) { ... });
  controller.storage.teams.get(id, function(err, team_data) {...});
  controller.storage.teams.all(function(err, all_team_data) {...});
  bot.reply(message, 'test successful. maybe code something more useful next time?');*/
};
