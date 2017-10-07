/*process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else if (instruction === '/version') {
			console.log(process.version);
		} else if (instruction === '/username') {
			console.log(process.env.USERNAME);
		}
		else {
			process.stderr.write('Wrong instuction!\n');
		}
	}
});*/

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/version':
				console.log(process.version);
				break;
			case '/username':
				console.log(process.env.USERNAME);
				break;
			default:
				process.stderr.write('Wrong instruction!\n');			
		}
	}
});

