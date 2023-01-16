const Bike = function(frontIndex, rearIndex){
	
	this.frontGearIndex = frontIndex || 0;
	this.rearGearIndex = rearIndex || 0; 
	
	this.transmission = {
		frontGearTeeth: [30,45],
		rearGearTeeth: [11,13,15,17,19,21,24,28,32,36]
		
	}
}

Bike.prototype.calculateGearRatio = function(){
	let front = this.transmission.frontGearTeeth[this.frontGearIndex],
	rear = this.transmission.rearGearTeeth[this.rearGearIndex];
	
	console.log(`front: ${front}, rear: ${rear}`);
	
	if (front && rear) {
		return (front / rear) ;
	} else {
		return 0; 
	}
	
};

Bike.prototype.changeGear = function(frontOrRear, changeBy) { 
	
	let shiftIndexName = frontOrRear + "GearIndex"
	
	//contains state change for making the shift
	let shiftObject = {
		currentIndex: this[shiftIndexName], 
		maxIndex: this.transmission[frontOrRear + "GearTeeth"].length -1,
		changeBy: changeBy
	}
	
	// invoke async function that returns a promise
	this.changeGearAsync(shiftObject)
	.then(
		(newIndex) => {
			
			this[shiftIndexName] = newIndex;
			
			console.log(this.calculateGearRatio());
			
		}
	)
	.catch(
		(err) => {console.log("Error: " + err);}
	);
};

/**
 * take in shiftObject, create new gear state and pass back through callback
 * if error, invoke callback with error
 */
Bike.prototype.changeGearAsync = function(shiftObject){
	
	return new Promise(
		(resolve, reject) => {
			
			let newIndex = shiftObject.currentIndex + shiftObject.changeBy; 
			
			if (newIndex < 0 || newIndex > shiftObject.maxIndex) {
				reject("New Index is Invalid: " + newIndex);
			} else {
				resolve(newIndex);
			}
			
		}
	);
};

const bike = new Bike(1,8);
console.log(bike.calculateGearRatio()); // 1.40625
bike.changeGear("front", -1);           // 0.9375
bike.changeGear("rear", 1);             // 0.8333...
bike.changeGear("front", -1);           // newIndex lower than zero so no change
