const outer = function(nam) {
	var personName;
	
	this.personName=nam;
	const inner1 = function() {
		console.log(inner.name);
	};
	
	const inner2 = function() {
		console.log(this.personName);
	};
	
	inner1();
	inner2();

};

outer('shankar');
