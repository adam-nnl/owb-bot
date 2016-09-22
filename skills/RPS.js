module.exports = function(skill, info, bot, message) {
const { hears, bot.memory_store: { channels } } = controller;

function privateConvo(bot, message) {
  const { user, channel } = message;

  return (err, convo) => {
    if (err) throw err;

    convo.ask('Do you want to play `paper`, `rock`, or `scissors`?', [
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

        channels.get(channel, (err, data) => {
          if (err) throw err;

          const updateData = data;
          updateData.players[user].played = prc;

          const { players } = updateData;
          const playerIDs = Object.keys(players);

          // check if only one player has played
          const onlyOnePlayed = playerIDs.find((id) => players[id].played === '');

          if (onlyOnePlayed) {
            channels.save(updateData, (err) => {
              if (err) throw err;

              bot.reply(message, `<@${user}> has played!`);
            });
          } else {
            const gameResults = playerIDs.map((id) => `<@${id}> played ${players[id].played}`);

            bot.reply(message, gameResults.join(' & '));

            // reset the game data
            channels.save({ id: updateData.id }, (err) => {
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

hears(['rps'], 'direct_message,direct_mention,mention', (bot, message) => {
  const { user, channel, text } = message;
  const userData = text.match(/<@([A-Z0-9]{9})>/);

  if (userData) {
    const playerTwo = userData[1];
    const gameData = {
      id: channel,
      players: {
        [user]: {
          accepted: true,
          played: '',
        },
        [playerTwo]: {
          accepted: false,
          played: '',
        },
      },
    };

    channels.save(gameData, (err) => {
      if (err) throw err;

      bot.say({
        text: `<@${playerTwo}> you've been challenged to a game of ROCK:mountain: PAPER:spiral_note_pad: SCISSORS:scissors: by <@${user}>,  say \`accept\` unless you're chicken :chicken:`,
        channel,
      });

      bot.startPrivateConversation(message, privateConvo(bot, message));
    });
  } else {
    bot.reply(message, 'You didn\'t challenge anyone...');
  }
});

hears(['accept'], 'ambient', (bot, message) => {
  const { channel } = message;

  channels.get(channel, (err, data) => {
    if (err) throw err;

    if (data && 'players' in data) {
      const { user } = message;
      const { players } = data;

      if (user in players && !players[user].accepted) {
        bot.reply(message, 'GREAT, LET THE BATTLE BEGIN!!! :mountain::spiral_note_pad::scissors:');

        bot.startPrivateConversation(message, privateConvo(bot, message));
      } else {
        const player = Object.keys(players).find((p) => !players[p].accepted);

        bot.reply(message, `Not you <@${user}>, waiting for <@${player}>.`);
      }
    }
  });
});

};
