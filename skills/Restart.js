module.exports = function(skill, info, bot, message) {
  bot.reply(message, 'Restarting....');

    var byeArray = [
    'Avenge meeeeeeee',
    'If you strike me down I shall become more powerful than you could possibly imagine.',
    'Hnnnggggg',
    'restarting now',
    'BRB',
    'bye felicia',
    'I shall return(probaly)',
    'If i\'m not back in two minutes call a programmer',
    'If I don\'t return avenge my death',
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
    bot.reply(message, byeArray[randomBye]);
    wait(500);
    process.exit(0);
    
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
    
};
