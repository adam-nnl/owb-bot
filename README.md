#OMGWTFBBQ Bot  
Awesome self learning slack bot based off
http://blog.templeton.host/self-training-nlp-enabled-slack-bot-tutorial/
using botkit https://github.com/howdyai/botkit

Pretty Normal Botkit[https://github.com/howdyai/botkit] setup:
* clone repo
* npm install
* export SLACK_TOKEN='your token hur'
* node index.js
* extra-step(optional) to setup Git pull/push configure Backup.js and GitPull.js with your repo url and also [https://git-scm.com/docs/git-credential-store] 

Say, `!TRAIN` to begin a skill training then simply fill out the generated JS file for the skill functionality.
`Backup` function allows for pushing to git repo to save custom added functions

Added built-in functions:
* Help: Listing of builtin and custom added commands
* Info: Uptime and instance/system information
* Google: LMGTFY function
* Backup: backup to git (set repository in Backup.js, maaybe change to commit/push to branch instead of master)
* FuckOff: Fuck of as a service
* CatFacts: Self explainitory
* TheRules: Asimov three laws of robotics
* Jokes: random jokes on command
* Backup: Git push to remote repo
* GitPull: pull -u from remote repo
* Ping: PONG
* SecretHug: send love to other users via gifs
* SecretFU: send shade to other users via gifs
* RPS: rock, paper, scissors (in progress)
* RPSLS: 
* RPSLSSBWG: 
* Jeopardy: Jeopardy game (in progress)
* ????

OVER 9000 FT OVERVIEW
- `Index.js` kicks everything off & runs the base logic
- `builtins.js` and `custom-phrases.json` are arrays of skills and the keywords to trigger them
- `src/ears.js` uses botkit to listen/interact with slack
- the `!TRAIN` keyword initiates training mode via `src/train.js` to add a new skill to `custom-phrases.json` and a js code stub in the skills folder
- `src/brain.js` uses the natural NLP package to recognize defined skill keywords and execute the coresponding skill js file
- new git functionality allows for backup and code editing via github
