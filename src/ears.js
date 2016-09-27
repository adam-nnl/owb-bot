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

    // @ https://api.slack.com/methods/users.list
    this.bot.api.users.list({}, function (err, response) {
        var teamID;
        if (response.hasOwnProperty('members') && response.ok) {
          this.bot.api.team.info((error, response) => {
              teamID = response.id; 
            });          
            var total = response.members.length;
            for (var i = 0; i < total; i++) {
                var member = response.members[i];
                var id = db.saveSync(teamID, {name: member.name, id: member.id});
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
