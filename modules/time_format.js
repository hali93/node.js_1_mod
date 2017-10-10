var os = require('os');

function formatUptime(uptime) {
	var uptime = os.uptime();
	var hours = Math.floor((uptime / 3600)).toFixed(0);
	var minutes = Math.floor(((uptime - (hours * 3600)) / 60)).toFixed(0);
	var seconds = (uptime - (hours * 3600) - (minutes * 60)).toFixed(0);
	if (hours > 0) {
		hours = hours + ' h.';
	} else {
		hours = '';
	}
	
	if (minutes > 0) {
		minutes = minutes + ' min.';
	} else {
		minutes = '';
	}

	if (seconds > 0) {
		seconds = seconds + ' sec.';
	} else {
		seconds = '';
	}

	uptime = hours + ' ' + minutes + ' ' + seconds;
	return uptime;
}

exports.getFormattedUptime = formatUptime;