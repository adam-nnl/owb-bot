module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;

    var userData = message.text.match(/\<(.*?)\>/g);

    console.log('messaage text: ' + message.text);
    console.log('userdata' + userData);
  if (userData) {
    // if there is a user named send ze hugs!
    for (var i = 0, len = userData.length; i < len; i++) {
        FU(userData[i].replace(/[^\w\s]/gi, ''));
        //console.log('userdate[i]' + userData[i]);
        //console.log('userdate[i]' + userData[i].replace(/[^\w\s]/gi, ''));
    }  
    //console.log(userData);
    bot.reply(message,'a fuck you has been sent! :middle_finger:');
  } else {
    bot.reply(message, 'You didn\'t name anyone…dumbass');
  }

function FU(user) {
    //DM some shade!
    bot.api.im.open({ user: user }, function (err, response) {
      if (err) {
        return console.log(err)
      }
    var fuckArray = [
    'https://giphy.com/gifs/cheezburger-olympics-U7P2vnWfPkIQ8',
    'https://giphy.com/gifs/QGzPdYCcBbbZm',
    'https://giphy.com/gifs/jennifer-lawrence-fuck-you-middle-finger-EvsmQokxE8wi4',
    'https://giphy.com/gifs/yV5xcSTmtVPBS',
    'https://giphy.com/gifs/ZCnBUZM3ZgLMQ',
    'https://giphy.com/gifs/mrw-system-privileges-u6FIMpM2MmQM',
    'https://giphy.com/gifs/sorry-fuck-you-middle-finger-Ebu8aRL2qxMzK',
    'https://giphy.com/gifs/angry-fuck-you-middle-finger-mpdNxvbxee5yw',
    'https://giphy.com/gifs/tkQ8MFJYh0hyM',
    'https://giphy.com/gifs/jon-j98wX5cxjtPva',
    'https://giphy.com/gifs/F9zavqlooT63C',
    'https://giphy.com/gifs/9JWWMAbUoAtH2',
    'https://giphy.com/gifs/middle-finger-martina-hill-10Pj0OFiQieaf6',
    'https://giphy.com/gifs/louis-ck-middle-finger-fuck-you-Qd71uU3LzyxXO'
    ];
    var randomFuck = Math.floor(Math.random()* fuckArray.length);    

    var dmChannel = response.channel.id
    bot.say({channel: dmChannel, text: 'Some one is throwing shade your way... :middle_finger:'})
    bot.say({channel: dmChannel, text: fuckArray[randomFuck]})
    })    
    
    
}
    
})

};
