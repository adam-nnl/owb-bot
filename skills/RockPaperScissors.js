module.exports = function(skill, info, bot, message, db) {
   function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

//return an array of keys that match on a certain value
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}
  var userData = message.text.match(/\<(.*?)\>/g);  //suss out any @mentions of users
  if (userData) {
    // if there is a user is mentioned initiate the challenge!
    var challenged = userData[0].replace(/[^\w\s]/gi, '');

    bot.api.users.info({user: challenged}, (error, response) => {
        bot.reply(message, ':rotating_light: <@' + response.user.name + '> you have been challenged to a game of ROCK:mountain: , PAPER:spiral_note_pad: , SCISSORS:scissors:! Prepare to defend your honor!'); 
    });
    bot.startPrivateConversation(message, privateConvo(bot, message));
    bot.startPrivateConversation({user: challenged}, privateConvo(bot, message));		  
  } else {
    //if no user challenged
    bot.reply(message, 'You didn\'t challenge anyone chicken shit. :chicken: :poop:');
  }

function privateConvo(bot, message) {
  const { user, channel } = message;
  return (err, convo) => {
    if (err) throw err;
    var rnd = Math.floor(Math.random()* 65);
    var encouragementArray = [
    'I believe in you!:hugging_face:',
    'I\'m sure you\'ll do your best!:heart:',
    'you\'re already a winner in my book!:wink:',
    'nothing can stop you!:smirk_cat:',
    'you have the eye of the tiger:smirk_cat:',
    'you have the heart of a champion:trophy:',
    'your lucky numbers are ' + rnd + ', ' + rnd + ', ' + rnd + ', ' + rnd + ', ' + rnd + '. :four_leaf_clover:',
    'take no prisoners! :rage1:',
    'Rock! On second thought- Paper! No Wait! Scissors...actually IDK',
    'Paper! NO, Rock! No Wait! Scissors; I made things worse, sorry. :disappointed:',
    'shoot straight!:grin:',
    'trust the force.',
    'trust in your instincts.',
    'Paper is on a roll!',
    'Get it. GET IT!',
    'You got this.:raised_hands:',
    'like a boss.:man_in_business_suit_levitating: ',
    'Establish dominance!',
    'what is best in life- Crush your enemies. See them driven before you. Hear the lamentations of their women.',
    'Rock it, or paper it? or _scissor_ it??:flushed:',
    'Cut em with scissors!',
    'Steady like a rock!',    
    'give no quarter, and expect none either!:crossed_swords: ',
    'no retreat, no surrender!:crossed_swords: ', 
    'I\'m not friends with losers- so try not to lose, eh? :trollface:',     
    'If you\'re not first you\'re last!:medal:',        
    'if you lose, don\'t bother coming home. :trollface:',
    'nothing can conquer your indomitable spirit!:raised_hands:'
    ];
    var randomEncouragement = Math.floor(Math.random()* encouragementArray.length); 
    convo.ask('Do you want to play `paper`, `rock`, or `scissors`? No matter what you choose just remember: ' + encouragementArray[randomEncouragement], [
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
        var userPlay = convo.extractResponse('rockPaperScissors');
	var rpsObj = db.getSync("rps");
          if (err) throw err;

          if (rpsObj.played === "") { //no one played yet. enter player move and note to channel
		console.log(rpsObj.played);
		  console.log('no one played');
		  rpsObj.played=message.user + '-' + userPlay;
		  console.log(getValues(db, message.user));
		  var id = db.saveSync("rps", rpsObj);
		  bot.reply(message, message.user + ' played!');
          } else { //someone played. enter current player move and existing move to game engine. print results. update w-l records for players. and clear played entry
		console.log(rpsObj.played);
		console.log('someone played');
		var gameEngine = require('./Rock-Paper-Spock');
  		var instance = new gameEngine(gameEngine.DefaultRules);
		var player1 = rpsObj.played.split("-");
  		instance.addPlayer({id: player1[0], sign: player1[1]});
  		instance.addPlayer({id: message.user, sign: userPlay});
  		instance.play();
  		console.log(instance.winner);
		if (Object.keys(instance.winner).length>1) {  //TIE!
		bot.reply(message, instance.winner[0].id + ' and ' + instance.winner[1].id + ' tied!');	
		console.log(getValues(db, winner[0].id));
		} else //One Winner
		bot.reply(message, instance.winner[0].id + ' won with ' + instance.winner[0].sign + '\n' + instance.loser[0].id + ' lost with ' + instance.loser[0].sign);
	  	}
		rpsObj.played='';
		var id = db.saveSync("rps", rpsObj);
          }

		  
      } else {
        // this happens if the conversation ended prematurely for some reason
        bot.reply(message, 'OK, nevermind!');
      }
	  
	  });
 }
 };
    


};
