module.exports = function(skill, info, bot, message, db) {
    var userData = message.text.match(/\<(.*?)\>/g);  //suss out any @mentions of users
  if (userData) {
    // if there is a user is mentioned initiate the challenge!
    //console.log(userData[0].replace(/[^\w\s]/gi, ''));
    var challenged = userData[0].replace(/[^\w\s]/gi, '');

    bot.api.users.info({user: challenged}, (error, response) => {
        bot.reply(message, ':rotating_light: ' + response.user.name + ' you have been challenged to a game of ROCK:mountain: , PAPER:spiral_note_pad: , SCISSORS:scissors:! Prepare to defend your honor!'); 
    });
    
    //bot.reply(message,'Let\'s rumble' + userData[0].replace(/[^\w\s]/gi, ''));
  } else {//if no user challenged
    bot.reply(message, 'You didn\'t challenge anyone you chicken shit! :chicken: :poop:');
  }

function getSlackName(userID) {
    var slackName
    bot.api.users.info({user: userID}, (error, response) => {
    console.log('response name: ' + response.user.real_name);
    console.log('Slackname: ' + response.user.real_name.toString());
    slackName = response.user.real_name.toString();
    })
    return slackName;
}

function FU(user) {
    //DM some shade!
    bot.api.im.open({ user: user }, function (err, response) {
      if (err) {
        return console.log(err)
      }
    var fuckArray = [
    'https://giphy.com/gifs/cheezburger-olympics-U7P2vnWfPkIQ8',
    'https://giphy.com/gifs/louis-ck-middle-finger-fuck-you-Qd71uU3LzyxXO'
    ];
    var randomFuck = Math.floor(Math.random()* fuckArray.length);    

    var dmChannel = response.channel.id
    bot.say({channel: dmChannel, text: 'Someone is throwing shade your way... :middle_finger:'})
    bot.say({channel: dmChannel, text: fuckArray[randomFuck]})
    })    
    
    
}
    

  
  
  var gameEngine = require('./Rock-Paper-Spock');
  
    //bot.api.users.info({user: message.user}, (error, response) => {
        //bot.reply(message, 'Rock Paper Scissors (lizard, spock, spiderman, batman, wizard, glock?)');
    //})  

  var instance = new gameEngine(gameEngine.DefaultRules);
  instance.addPlayer({id: 1, sign: "paper"});
  instance.addPlayer({id: 2, sign: "rock"});
  instance.play();
  console.log(instance.winner);
  //note players that won-lost, add support for W-L records
  //bot.reply(message, 'test successful. maybe code something more useful next time?');
};
