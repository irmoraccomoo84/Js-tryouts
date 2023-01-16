var res = '';
fun1((result) => {
	result = 'callback of fun1:' + result;
	fun2(result, (result2) => {
		result2 = result + 'callback of fun2:' + result2;
		fun3(result2, (result3) => {
			result3 = result2 + 'callback of fun3:' + result3;
			res = result3;
		});
	});
});


console.log('final:' + res);

function fun1(callback) {
	console.log('in fun1');
	callback('result1,');
}

function fun2(result, callback) {
	console.log('in fun2');
	callback('result2,');
}

function fun3(result2, callback) {
	console.log('in fun3');
	callback('result3');
}
