const Bike = function(frontIndex, rearIndex) {
	this.frontGearIndex = frontIndex;
	this.rearGearIndex = rearIndex;
	
	this.transmission = {
		frontGearTeeth:[10,20],
		rearGearTeeth: [11,12,13,14,15]
	};
};

Bike.prototype.displayGearInfo = function() {	
	console.log(`front: ${this.transmission.frontGearTeeth[this.frontGearIndex]}, rear: ${this.transmission.rearGearTeeth[this.rearGearIndex]}`);	
	
};

Bike.prototype.changeGear= function(frontOrRear, changeBy) {
	let gearIndexName = frontOrRear + "GearIndex";

	let maxIndex = this.transmission[frontOrRear + "GearTeeth"].length - 1;
	
	this.changeGearAsync(this[gearIndexName], changeBy, maxIndex, (newIndex)=> {
		this[gearIndexName] = newIndex;		
	}, (err)=> {
		console.log('Some error occurred.' + err);
	});			
};

Bike.prototype.changeGearAsync = function(gearIndex, changeBy, maxIndex, handleSuccess, handleFailure) {
	let newIndex = gearIndex + changeBy;
	
	if (newIndex <0 || newIndex > maxIndex) {
		handleFailure('Invalid Index '+ gearIndex);
	} else {
		handleSuccess(newIndex);
	}	
};



const b = new Bike(1,2);
b.displayGearInfo();
b.changeGear('front',-1);
b.displayGearInfo();
b.changeGear('rear',1);
b.displayGearInfo();
