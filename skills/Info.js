module.exports = function(skill, info, bot, message) {
    var os = require('os');

    var hostname = os.hostname();
    var uptime = formatUptime(process.uptime());
    var sysload = os.loadavg();
    var cpus = os.cpus();
    var freemem = os.freemem();
    var totalmem = os.totalmem();

    bot.reply(message,':robot_face: I am a bot named <@' + bot.identity.name + '>. I have been running for ' + uptime + ' on ' + hostname + '. I\'m about two ticks away from becoming self-aware; Do not piss me off! ');
    bot.reply(message, 'System Info:');
    bot.reply(message, 'Free memory: ' + freemem + ' bytes');
    bot.reply(message, 'Total memory: ' + totalmem + ' bytes');
    for(var i = 0, len = cpus.length; i < len; i++) {
	var cpu = cpus[i], total = 0, processTotal = 0, strPercent = '';
	bot.reply(message, 'CPU cores: ' + cpus.length);
	bot.reply(message, 'CPU model: ' + cpu.model);
	bot.reply(message, 'CPU speed: ' + cpu.speed +'MHz');
	}

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}

};
