// ElecticalAppliance.prototype.plugInOnOff = function(){
// 	turn = promnt("Если хотите включить прибор введите ON\n Если выключить OFF ")
// 	turn = turn.toUpperCase()
// 		if(turn == "ON"){
// 			(this.isPlugged == true)
// 		}else if(turn == "OFF"){
// 			(this.isPlugged == false)
// 		}else{
// 			(alert("Вы указали не верное значение! "))
// 		}
// 	}

class ElecticalAppliance {
	constructor(name,power){
		this.name = name;
		this.power = power;
		this.isPlugged = false;
	}

	plugIn(){
		console.log(this.name + " is plugged!");
		this.isPlugged = true;
	}

	unplug(){
		console.log(this.name + " is unplugged!");
		this.isPlugged = false;
	}
}

class Lamp extends ElecticalAppliance {
	constructor (name,brand, power, bulbType){
		super(name,power);
		this.brand = brand;
		this.bulbType = bulbType;
		this.isPlugged = true;
	}
}

class Computer extends ElecticalAppliance {
	constructor(name,brand,power,type, functionality){
		super(name, power);
		this.brand = brand;
		this.type = type;
		this.functionality = functionality;
		this.isPlugged = true;
	}
}

let tableLamp = new Lamp("Table Lamp","Toshiba",5,"Led");

let homePC = new Computer("Home PC","Intel","120","stationary","for work")


homePC.plugIn()
console.log(homePC)


