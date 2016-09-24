module.exports = function(skill, info, bot, message, db) {
    var userData = message.text.match(/\<(.*?)\>/g);  //suss out any @mentions of users
  if (userData) {
    // if there is a user is mentioned initiate the challenge!
    //console.log(userData[0].replace(/[^\w\s]/gi, ''));
    var challenged = userData[0].replace(/[^\w\s]/gi, '');

    bot.api.users.info({user: challenged}, (error, response) => {
        bot.reply(message, ':rotating_light: ' + response.user.name + ' you have been challenged to a game of ROCK:mountain: , PAPER:spiral_note_pad: , SCISSORS:scissors:! Prepare to defend your honor!'); 
    });
    playerShoot(message.user);
    //bot.reply(message,'Let\'s rumble' + userData[0].replace(/[^\w\s]/gi, ''));
  } else {//if no user challenged
    bot.reply(message, 'You didn\'t challenge anyone you chicken shit! :chicken: :poop:');
  }

function playerShoot(user) {
    //DM the players for thier  moves
    bot.api.im.open({ user: user }, function (err, response) {
      if (err) {
        return console.log(err)
      }
    var encouragementArray = [
    'I believe in you!',
    'I\'m sure you\'ll do your best!',
    'you\'re already a winner in my book!',
    'nothing can stop you!',
    'if you lose, don\'t bother coming home.',
    'nothing can conquer your indomitable spirit!'
    ];
    var randomEncouragement = Math.floor(Math.random()* encouragementArray.length);    

    var dmChannel = response.channel.id;
    var positiveVibes = 'What do you want to play? *Rock*, *Paper* or *Scissors*? Not matter what you choose, just remember ' + encouragementArray[randomEncouragement];
    bot.say({channel: dmChannel, text: positiveVibes});
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
