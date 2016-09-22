module.exports = function(skill, info, bot, message, db) {
  var gameEngine = require('rock-paper-spock');

  var instance = new gameEngine(gameEngine.DefaultRules);
  instance.addPlayer({id: 1, sign: "spock"});
  instance.addPlayer({id: 2, sign: "rock"});
  instance.addPlayer({id: 3, sign: "spock"});
  instance.addPlayer(4, "rock").addPlayer(5, "paper");
  instance.play();
  console.log(instance.winner);
  bot.reply(message, 'test successful. maybe code something more useful next time?');
};
