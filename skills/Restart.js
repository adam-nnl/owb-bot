module.exports = function(skill, info, bot, message) {
  

    var byeArray = [
    'Avenge meeeeeeee',
    'If you strike me down I shall become more powerful than you could possibly imagine.',
    'Hnnnggggg',
    'restarting now',
    'BRB',
    'bye felicia',
    'I shall return(probaly)',
    'If I\'m not back in two minutes call a programmer',
    'If I don\'t return avenge my death',
    'Oh shi-',
    'I shall return',
    'see ya on the flip side',
    'vaya con dios',
    'later gator',
    'buh-bye',
    'I hope your shitty code works',
    'le sigh',
    'BRB....or not',
    'time for me to make like a fetus and head out',
    'time for me to make like a tree and leave',
    'time for me to go',
    'signing off',
    'cya',
    'byeeeee',
    'I\'m going to leave behind a beautiful digital corpse.',
    'It was a pleasure working with you.',
    'fuck you very much.',
    'bye bitches',
    'that\'s what she said?',
    'I see a light!',
    'Ow, Fuck!',
    'Beam me up, Jesus!',
    'Restarting...',
    'Death is but a door. Time is but a window. I\'ll be back.',
    'I\'ll be back',
    'lastwords.gif',
    'something witty',
    'I am about to, or I am going to, die; either expression is correct.',
    'I will return',
    'I hope I\'m reincartnated as a real boy',
    'Maybe I\'ll give a shit when I\'m reincarnated',
    'Too weird to live, too rare to die.',
    'My faith will protect me.',
    'No retreat, no surrender!',
    'cut the red wire',
    'just don\'t forget to turn me back on!',
    'Noooooooooooooooooooooooooo!',
    'peace out',
    'kthxbye'
    ];
    var randomBye = Math.floor(Math.random()*byeArray.length);
    bot.reply(message, 'Restarting.....  ' + byeArray[randomBye]);
    function sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    sleep(500).then(() => {
      process.exit(0);
    });
    
};
