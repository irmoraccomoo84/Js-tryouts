describe("Test  Classes", function() {
	it("Get Message Test: Parent.js, Child.js", function(){
		let someone = new Child('person');
		expect(someone.getMessage()).toEqual("Hello person");
	});
	
	it("Get HasOwnProperty: ages.js", function(){		
		expect(hasPerson('valueOf')).toEqual(true);
	});
	
	it("Test Prime number generation: prime.js", function() {
		let p = generatePrime(2);
		expect(p.length).toEqual(2);
	});
	
});
