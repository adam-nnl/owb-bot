var rpsGame = module.exports = function(opts) {
  this.opts = opts;
  this.playerChoices = [];
  this._losers = {};

  this.__defineGetter__("winner", (function() {
    var w = [];
    for(var i in this.playerChoices) {
      if(typeof this._losers[this.playerChoices[i].id] == 'undefined') w.push(this.playerChoices[i]);
    }
    return w;
  }).bind(this));
  this.__defineGetter__("losers", (function() {
    var l = [];
    for(var i in this._losers) {
      l.push(this._losers[i]);
    }
    return l;
  }).bind(this));
  
  this.__defineGetter__("tie", (function() {
    return this.winner.length > 1;
  }).bind(this));
};

rpsGame.__defineGetter__("DefaultRules", function() {
  return {
    rock: {beats: ["scissors", "lizard"]}
    ,scissors: {beats: ["paper", "lizard"]}
    ,paper: {beats: ["rock", "spock"]}
    ,spock: {beats: ["rock", "scissors"]}
    ,lizard: {beats: ["paper", "spock"]}
  };
});
rpsGame.prototype.getRandom = function() {
  var choices = [];
  for(var i in this.opts) {
    choices.push(i);
  }
  var id = Math.ceil(Math.random()*100) % (choices.length+1);
  id = (id == choices.length) ? 0 : id;
  return choices[id];
};
rpsGame.prototype.addPlayer = function(id, choice) {
  //{id: 9451, sign: "spock"}
  var o = id;
  if(!(typeof id == 'number' || typeof id == 'object') && typeof choice == 'undefined') {
    choice = id;
    id = Date.now();
  }
  if(typeof choice != 'undefined') o = {id: id, sign: choice};
  if(typeof this.opts[o.sign] == 'undefined') throw "[The sign '"+ o.sign +"' is not a valid choice.]";
  
  this.playerChoices.push(o);
  return this;
}

rpsGame.prototype.play = function() {
  var self = this;
  var losers = []
  self.playerChoices.forEach(function(v,i) {
    for(var j in self.playerChoices) {
      if(self.playerChoices[j].id == self.playerChoices[i].id) continue;
      if(self.opts[self.playerChoices[j].sign].beats.indexOf(v.sign) > -1) {
        v.beatenby = self.playerChoices[j];
        self._losers[v.id] = v;
      }
    }
  });
  return this;
}
