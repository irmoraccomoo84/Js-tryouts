// Promise provider
function doSomething(msg, delay) {
	return new Promise( (resolve, reject) => {
		if (msg.indexOf('test')>-1) {
			setTimeout(resolve, delay);
		} else {
			reject('failed');
		}
	});
}

doSomething('This is a test', 1000)
	.then( (res)=>doSomething('This is a test2', 2000))
	.then( (res)=>console.log('job done'))
	.catch((err)=>console.log('some err happened' + err));
