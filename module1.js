const disp = () => {
	let d = document.createElement('div');
	d.textContent = 'From Module2.js';
	document.body.appendChild(d);
};

export { disp };
