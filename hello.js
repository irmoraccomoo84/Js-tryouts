function greeting(greeting) {
	
	return greet; // returns before greet is executed.
	function greet(who) {
		console.log(greeting + ', ' + who);		
	}	
}

var myfun = greeting('Hello');
myfun('shankar'); //a closure is created which will have greet() function AND the environment in which it was declared (local variable greeting and its value 'Hello')
