function ElecticalAppliance(name,power) {
	this.name = name; 
	this.power = power;
	this.isPlugged = false;
}

ElecticalAppliance.prototype.plugIn = function() {
	console.log(this.name + ' is Plugged!');
	this.isPlugged = true;
}

ElecticalAppliance.prototype.unplug = function() {
	console.log(this.name + ' is unplugged!');
	this.isPlugged = false;
}

function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Lamp.prototype = new ElecticalAppliance();

function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = true;
}

Computer.prototype = new ElecticalAppliance();

const TableLamp = new Lamp("Table lamp", "Toshiba", 5 ,"Led")
const homePC = new Computer("PC", "Intel", 125 ,"HomePC","For Game")

TableLamp.unplug()

