var BotKit = require('botkit');

module.exports = Ears;

var Bot = BotKit.slackbot({
  debug: false,
  storage: undefined
});

function Ears(token) {
  this.scopes = [
    'direct_mention',
    'direct_message',
    'mention'
  ];
  this.token = token;
}

Ears.prototype.listen = function() {
  console.log('TOKEN: ' + this.token);
  this.bot = Bot.spawn({
    token: this.token
  }).startRTM();
  return this;
}

Ears.prototype.snoop = function(db) {
    bot.api.users.info({user: challenged}, (error, response) => {
        //for-loop store usernames/id for quick ref 
    });
};

Ears.prototype.hear = function(pattern, callback) {
  Bot.hears(pattern, this.scopes, callback);
  return this;
};
