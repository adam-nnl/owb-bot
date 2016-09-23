module.exports = function(skill, info, bot, message, db) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;

    var userData = message.text.match(/\<(.*?)\>/g);

    console.log('messaage text: ' + message.text);
    console.log('userdata' + userData);
  if (userData) {
    // if there is a user named send ze hugs!
    for (var i = 0, len = userData.length; i < len; i++) {
        HugUser(userData[i].replace(/[^\w\s]/gi, ''));
        //console.log('userdate[i]' + userData[i]);
        //console.log('userdate[i]' + userData[i].replace(/[^\w\s]/gi, ''));
    }  
    //console.log(userData);
    bot.reply(message,'a hug has been sent! :hugging_face:');
  } else {
    bot.reply(message, 'You didn\'t name anyone…were you the one that needed a hug ' + name + '?');
  }

function HugUser(user) {
    //DM some love!
    bot.api.im.open({ user: user }, function (err, response) {
      if (err) {
        return console.log(err)
      }
    var hugArray = [
    'https://giphy.com/gifs/disney-big-hero-6-baymax-hiro-Lb3vIJjaSIQWA',
    'https://giphy.com/gifs/hug-hugging-monkeys-3o7TKu8D1d12Eo9wSQ',
    'https://giphy.com/gifs/pokemon-hug-love-8tpiC1JAYVMFq',
    'https://giphy.com/gifs/hug-love-winnie-the-pooh-llmZp6fCVb4ju',
    'https://giphy.com/gifs/hug-weekend-monkey-VHdWBA7CeRxWU',
    'https://giphy.com/gifs/awkward-compared-carney-cYBw0hoe3VgHK',
    'https://giphy.com/gifs/bay-pet-fyx8vjZc2ZvoY',
    'https://giphy.com/gifs/disney-hug-movie-OiKAQbQEQItxK',
    'https://giphy.com/gifs/hug-cute-fail-SKElG8dQWhPdS',
    'https://giphy.com/gifs/cute-friends-hug-ck27cNlAHxveU'
    ];
    var randomHug = Math.floor(Math.random()* hugArray.length);    

    var dmChannel = response.channel.id
    bot.say({channel: dmChannel, text: 'Some one sent you a hug! :hugging_face:'})
    bot.say({channel: dmChannel, text: hugArray[randomHug]})
    })    
    
    
}
    
})

};
