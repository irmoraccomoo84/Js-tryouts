function doSomething(delay, msg, callback) {
	setTimeout(() => { 
		console.log(msg + ' ' + delay);
		callback();
	}
	, delay);	
}


// callback pyramid of doom
doSomething(1000, 'this is a test1', () =>
	doSomething(2000, 'This is a test2', () =>
		doSomething(3000, 'This is a test3', ()=>{})
	)
);
