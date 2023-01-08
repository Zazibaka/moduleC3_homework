let person = {
	name : "Mike",
}

person["city"]  = "Novovsibsk"

const studen = Object.create(person)

studen.ownCity = "Piter"

console.log(person)
console.log(studen)


function printОbject(obj) {
	for(let prop in obj){
		if(obj.hasOwnProperty(prop)){
			console.log(prop,obj[prop]);
		}
	}
}

function checkPropInOnj(str,obj){
	return(str in obj);
}


function createObjWithoutProto(){
	return Object.create(null)
}
