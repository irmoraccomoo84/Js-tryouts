function doSomething(msg, delay) {
	
	return new Promise(
		(resolve, reject) => {
			
// 			setTimeout(
// 				()=> {
					console.log(`${msg} ${delay}\n`);
 					resolve();
// 					if (msg.indexOf('test')>-1) {
// 						resolve();
// 					} else {
// 						reject(new Error('bam!'));
// 					}
// 				}, 
// 				delay
// 			);
		}
	);
}

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function observePromise(promise) {
	if (promise.isResolved) return promise;
	
	var isResolved = false;
	var isRejected = false; 
	console.log('inside observePromise' + promise);
	let result = promise.then((v) => {isResolved = true;return v;},(e) => {isRejected=false; throw e;});
	result.isResolved = isResolved || isRejected;
	result.isRejected = isRejected;
	
	return result;	
}

let pr = doSomething('This is a test1', 1000)
.then(()=> console.log('hi'))
// .then(()=> doSomething('This is a test2',1000))
// .then(()=> doSomething('This is a test3',1000))
// .then(()=> doSomething('this is bound to fail',4000))
.catch((err) => console.log(err.message));

// console.log(observePromise(Promise.resolve(1)));


// console.log('resolved?'+prr.isResolved);
/*
resolve immed.
let pr = Promise.resolve(1);
console.log(observePromise(pr));*/
