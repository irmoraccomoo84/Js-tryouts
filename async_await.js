function doSomething(msg, delay) {
	
	return new Promise(
		(resolve, reject) => {
			setTimeout(
				()=> {
					console.log(msg + ' ' + delay);
					if (msg.indexOf('test') > -1) {					
						resolve();
					} else {
						reject('no test found');
					}
				}, 
				delay
			);
		}
	);
}

async function doManyThings() {
	try {
		await doSomething('test1',1000);
		await doSomething('test2',1000);
		await doSomething('fail',1000);
	} catch(err) {
		console.log('error occured::'+ err);
	}
}

doManyThings();
console.log('after');
