var fs = require('fs');

var Train = require('./src/train');
var Brain = require('./src/brain');
var Ears = require('./src/ears');
var builtinPhrases = require('./builtins');
var Store = require('jfs');
//var db = new Store('./src/memory.json');
var db = new Store('memory',{pretty:true});
var Bottie = {
  Brain: new Brain(),
  Ears: new Ears(process.env.SLACK_TOKEN)
};

var customPhrasesText;
var customPhrases;
try {
  customPhrasesText = fs.readFileSync(__dirname + '/custom-phrases.json').toString();
} catch (err) {
  throw new Error('Uh oh, Bottie could not find the ' +
    'custom-phrases.json file, did you move it?');
}
try {
  customPhrases = JSON.parse(customPhrasesText);
} catch (err) {
  throw new Error('Uh oh, custom-phrases.json was ' +
    'not valid JSON! Fix it, please? :)');
}

console.log('Bot is learning...');
Bottie.Teach = Bottie.Brain.teach.bind(Bottie.Brain);
eachKey(customPhrases, Bottie.Teach);
eachKey(builtinPhrases, Bottie.Teach);
Bottie.Brain.think();
console.log('Bot finished learning, time to listen...');
Bottie.Ears
  .listen()
  .hear('!TRAIN', function(speech, message) {
    console.log('Delegating to on-the-fly training module...');
    Train(Bottie.Brain, speech, message);
  })
  .hear('.*', function(speech, message) {
    var interpretation = Bottie.Brain.interpret(message.text);
    console.log('Bot heard: ' + message.text);
    console.log('Bot interpretation: ', interpretation);
    if (interpretation.guess) {
      console.log('Invoking skill: ' + interpretation.guess);
      Bottie.Brain.invoke(interpretation.guess, interpretation, speech, message, db);
    } else {
      speech.reply(message, 'Hmm... I couldn\'t tell what you said...DM me `help` for a list of my commands and keywords');
      //speech.reply(message, '```\n' + JSON.stringify(interpretation) + '\n```');
    }
  });



function eachKey(object, callback) {
  Object.keys(object).forEach(function(key) {
    callback(key, object[key]);
  });
}
