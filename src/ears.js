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

Ears.prototype.listen = function(db) {
  console.log('TOKEN: ' + this.token);
  this.bot = Bot.spawn({
    token: this.token
  }).startRTM();

    var id = db.saveSync("rps",{played: ''});  
    // @ https://api.slack.com/methods/users.list
    this.bot.api.users.list({}, function (err, response) {
        if (response.hasOwnProperty('members') && response.ok) {
            var total = response.members.length;
            for (var i = 0; i < total; i++) {
                var member = response.members[i];
                var id = db.saveSync(member.id,{name: member.name, rpswin:'0',rpsloss:'0'});
                //fullTeamList.push({name: member.name, id: member.id});
            }
        }
    });
  return this;
}

Ears.prototype.hear = function(pattern, callback) {
  Bot.hears(pattern, this.scopes, callback);
  return this;
};
