module.exports = function(skill, info, bot, message) {
    bot.api.users.info({user: message.user}, (error, response) => {
    let {name, real_name} = response.user;

    var userData = message.text.match(/\<(.*?)\>/g);

    console.log('messaage text: ' + message.text);
    console.log('userdata' + userData);
  if (userData) {
    // if there is a user named send ze dick!
    for (var i = 0, len = userData.length; i < len; i++) {
        Dick(userData[i].replace(/[^\w\s]/gi, ''));
    }  
    bot.reply(message,'a dick pic has been sent! :open_mouth:');
  } else {
    bot.reply(message, 'You didn\'t name anyone!');
  }

function Dick(user) {
    //DM some shade!
    bot.api.im.open({ user: user }, function (err, response) {
      if (err) {
        return console.log(err)
      }
    var dickArray = [
    'http://cdn.quotationof.com/images/andy-dick-5.jpg',
    'http://queerty-prodweb.s3.amazonaws.com/wp/docs/2014/11/AFI-FEST-2006-presented-Audi-Gala-Premiere-FFDKcmrTWvnl.jpg',
    'http://www.billboard.com/files/stylus/1969069-dick-clark-obit-617-409.jpg',
    'https://cdn.d23.com/cdn2015/wp-content/uploads/2015/07/Dick-Clark-feat.jpg',
    'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU0OTI1NjQxMjMx.jpg',
    'http://cbsnews2.cbsistatic.com/hub/i/r/2012/04/18/d06edaa2-8ba1-11e2-9400-029118418759/thumbnail/620x350/67edf6edf057ab41d0947fe109bf17ad/Dick-Clark-1985.jpg',
    'http://s.hswstatic.com/gif/dick-butkus-at-4.jpg',
    'http://www.vintagecardprices.com/pics/2088/96446.jpg',
    'http://www.vintagecardprices.com/pics/2096/92242.jpg',
    'http://prod.static.bears.clubs.nfl.com/assets/images/imported/CHI/photos/clubimages/2014/12-December/tempbutkus-birthday-13--nfl_mezz_1280_1024.jpg',
    'http://a.abcnews.com/images/Politics/gty_dick_cheney_cowboy_hat_jc_150202_16x9_992.jpg',
    'http://a3.files.biography.com/image/upload/MTE4MDAzNDEwNDgwMDM5NDM4.jpg',
    'http://rightweb.irc-online.org/wp-content/uploads/2016/03/richard-dick-cheney1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/93/Secretary_of_Defense_Richard_B._Cheney,_official_portrait.jpg',
    'http://media.salon.com/2013/11/dick_cheney.jpg',
    'http://www.nndb.com/people/814/000022748/dreyfus2-sized.jpg', 
    'https://kpbs.media.clients.ellingtoncms.com/img/news/tease/2016/04/14/richard-dreyfuss.jpg', 
    'http://cdn3.thr.com/sites/default/files/2012/02/richard_dreyfuss_night_of_100_stars.jpg', 
    'http://cache.gawkerassets.com/assets/images/4/2011/06/richarddreyfuss.jpg', 
    'http://splitsider.awlnetwork.com/wp-content/uploads/sites/2/2011/09/richard-pryor.jpg', 
    'http://cdn.bleedingcool.net/wp-content/uploads/2015/08/richard-pryor.jpg',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1NzUzMTIzNF5BMl5BanBnXkFtZTcwNTM5ODAyMw@@._V1_UY317_CR19,0,214,317_AL_.jpg',       
    'http://www.nndb.com/people/816/000022750/rgere.jpg', 
    'https://lh6.googleusercontent.com/-mxOaVRwNNss/TYqNSlcdsQI/AAAAAAAAAxA/z_wAWV_LEqg/s1600/Richard-Gere-Tux-close2.jpg', 
    'http://www.therealbest.com/img/items/big/589/Richard-Gere_Always-handsome_798.jpg',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDQ2OTY4M15BMl5BanBnXkFtZTYwNTYyNjc4._V1_UY317_CR4,0,214,317_AL_.jpg',       
    'https://www.archives.gov/presidential-libraries/events/centennials/nixon/images/rn-2-m.jpg',   
    'http://cp91279.biography.com/1000509261001/1000509261001_2085990537001_Bio-Biography-Richard-Nixon-SF.jpg', 
    'http://cdn.history.com/sites/2/2013/11/Richard_Nixon-AB.jpeg',
    'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/37_richard_m_nixon.jpg'
    ];
    var randomDick = Math.floor(Math.random()* dickArray.length);    

    var dmChannel = response.channel.id
    bot.say({channel: dmChannel, text: 'Someone thought you should see dick:'})
    bot.say({channel: dmChannel, text: dickArray[randomDick]})
    })    
    
    
}
    
})
};
