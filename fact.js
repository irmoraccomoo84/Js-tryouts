function A(x) {
	function B(y) {
		function C(z) {
			console.log(x+y+z);
		}
		C(3);
	}
	B(4);
}
A(2);
