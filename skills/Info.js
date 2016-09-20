module.exports = function(skill, info, bot, message) {
    var os = require('os');

    var hostname = os.hostname();
    var uptime = formatUptime(process.uptime());
    var sysload = os.loadavg();
    var cpus = os.cpus();
    var freemem = os.freemem();
    var totalmem = os.totalmem();

	for(var i = 0, len = cpus.length; i < len; i++) {
		var cpu = cpus[i], total = 0, processTotal = 0, strPercent = '';

		console.log("CPU %s:", i);
		console.log("CPU model:", cpu.model);
		console.log("CPU speed:", cpu.speed);
		console.log("\t",'user',cpu.times.user,'|nice',cpu.times.nice,'|sys',cpu.times.sys,'|idle',cpu.times.idle,'|irq',cpu.times.irq);
		
	}

    bot.reply(message,
        ':robot_face: I am a bot named <@' + bot.identity.name +
        '>. I have been running for ' + uptime + ' on ' + hostname + '. I\'m about two ticks away from becoming self-aware; Do not piss me off! ' +
        'Processor(s): ' + cpus + ' Free memory: ' + freemem + ' Total memory: ' + totalmem + ' System load averages: ' + sysload
        );

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
