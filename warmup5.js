// 1-create a data model to represent your classmates



//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
function makeclassmates (name, age, origin, sex){
	return{
		name: name,
		age: age, 
		origin: origin, 
		sex: sex
	}
}

var mate1 = makeclassmates ("bilel", 27, "tunis","male");
var mate2= makeclassmates ("meher", 24, "sousse","male" );
var mate3 = makeclassmates ("dhia", 20, "sfax", "male");
//     -create an array to hold the classmates that you created and what you created to it .  

var classMates = [mate1, mate2, mate3]; 
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend (mate){
	return "My classmate is "+ mate.name+" he is "+mate.sex+" , his age is "+mate.age+" and he is from "+mate.origin
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend (mate){
	 return classMates.push(mate)
}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(array){
	var count= 0;
	for (var i=0; i<array.length; i++){
		if (array[i].sex === "male"){
			count++
		}
	}
	return count
}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates (array, query){
	for (var i= 0; i<array.length; i++){
		if (Object.values(array[i]).indexOf(query)!==-1){
			return displayFriend (array[i])
		}
	}
return query +" not found"
}