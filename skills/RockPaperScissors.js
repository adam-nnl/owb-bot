module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;

    var userData = message.text.match(/\<(.*?)\>/g);

    console.log('messaage text: ' + message.text);
    console.log('userdata' + userData);
  if (userData) {
    // if there is a user named send ze hugs!
    //for (var i = 0, len = userData.length; i < len; i++) {
        //FU(userData[i].replace(/[^\w\s]/gi, ''));
        //console.log('userdate[i]' + userData[i]);
        //console.log('userdate[i]' + userData[i].replace(/[^\w\s]/gi, ''));
    //}  
    console.log(userData[0].replace(/[^\w\s]/gi, ''));
    bot.api.users.info({user: userData[0].replace(/[^\w\s]/gi, '')}, (error, response) => {let {challengedName, challengedReal_name} = response.user;
       bot.reply(message,'Let\'s rumble ' + challengedReal_name); 
    })
    
    //bot.reply(message,'Let\'s rumble' + userData[0].replace(/[^\w\s]/gi, ''));
  } else {
    bot.reply(message, 'You didn\'t challenge anyone you chicken shit! :chicken: :poop:');
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
    
})  
  
  
  var gameEngine = require('./Rock-Paper-Spock');
  
    bot.api.users.info({user: message.user}, (error, response) => {
        //bot.reply(message, 'Rock Paper Scissors (lizard, spock, spiderman, batman, wizard, glock?)');
    })  

  var instance = new gameEngine(gameEngine.DefaultRules);
  instance.addPlayer({id: 1, sign: "spock"});
  instance.addPlayer({id: 2, sign: "rock"});
  instance.addPlayer({id: 3, sign: "spock"});
  instance.addPlayer(4, "rock").addPlayer(5, "paper");
  instance.play();
  console.log(instance.winner);
  //note players that won-lost, add support for W-L records
  //bot.reply(message, 'test successful. maybe code something more useful next time?');
};
