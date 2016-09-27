module.exports = function(skill, info, bot, message, db) {
    var channelID = {
    channel: "bar"
    };  
  db.save(channelID, function(err, id){
  // id is a unique ID
    });
  var userData = message.text.match(/\<(.*?)\>/g);  //suss out any @mentions of users
  if (userData) {
    // if there is a user is mentioned initiate the challenge!
    //console.log(userData[0].replace(/[^\w\s]/gi, ''));
    var challenged = userData[0].replace(/[^\w\s]/gi, '');

    bot.api.users.info({user: challenged}, (error, response) => {
        bot.reply(message, ':rotating_light: @' + response.user.name + ' you have been challenged to a game of ROCK:mountain: , PAPER:spiral_note_pad: , SCISSORS:scissors:! Prepare to defend your honor!'); 
    });
    //playerShoot(message.user);
    bot.startPrivateConversation(message, privateConvo(bot, message));
    //bot.reply(message,'Let\'s rumble' + userData[0].replace(/[^\w\s]/gi, ''));
  } else {//if no user challenged
    bot.reply(message, 'You didn\'t challenge anyone you chicken shit! :chicken: :poop:');
  }

function privateConvo(bot, message) {
  const { user, channel } = message;

  return (err, convo) => {
    if (err) throw err;
    var encouragementArray = [
    'I believe in you!',
    'I\'m sure you\'ll do your best!',
    'you\'re already a winner in my book!',
    'nothing can stop you!',
    'you have the eye of the tiger',
    'you have the heart of a champion',
    'your lucky numbers are 52, 17, 4, 61, 44, 23',
    'take no prisoners!',    
    'give no quarter, and expect none either!',
    'no retreat, no surrender!', 
    'I\'m not friends with losers, so try not to lose, eh?',     
    'If you\'re not first you\'re last!',        
    'if you lose, don\'t bother coming home.',
    'nothing can conquer your indomitable spirit!'
    ];
    var randomEncouragement = Math.floor(Math.random()* encouragementArray.length); 
    convo.ask('Do you want to play `paper`, `rock`, or `scissors`? No matter what you choose, just remember- ' + encouragementArray[randomEncouragement], [
      {
        pattern: 'paper|rock|scissors',
        callback(response, convo) {
          // since no further messages are queued after this,
          // the conversation will end naturally with status === 'completed'
          convo.next();
        },
      }, {
        default: true,
        callback(response, convo) {
          convo.repeat();
          convo.next();
        },
      },
    ], { key: 'rockPaperScissors' }); // store the results in a field called rockPaperScissors

    convo.on('end', (convo) => {
      if (convo.status === 'completed') {
        const prc = convo.extractResponse('rockPaperScissors');

        db.get(channel, (err, data) => {
          if (err) throw err;

          const updateData = data;
          updateData.players[user].played = prc;

          const { players } = updateData;
          const playerIDs = Object.keys(players);

          // check if only one player has played
          const onlyOnePlayed = playerIDs.find((id) => players[id].played === '');

          if (onlyOnePlayed) {
            db.save(updateData, (err) => {
              if (err) throw err;

              bot.reply(message, `<@${user}> has played!`);
            });
          } else {
            const gameResults = playerIDs.map((id) => `<@${id}> played ${players[id].played}`);

            bot.reply(message, gameResults.join(' & '));

            // reset the game data
            db.save({ id: updateData.id }, (err) => {
              if (err) throw err;
            });
          }
        });
      } else {
        // this happens if the conversation ended prematurely for some reason
        bot.reply(message, 'OK, nevermind!');
      }
    });
  };
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
