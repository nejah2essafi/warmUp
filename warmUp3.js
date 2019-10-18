// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var females= ["lina", "ruba","maroua", "nadine"] 
var males=["hashem", "ahmed","bilel","meher"]; 
var instructors =["saif", "youssef", "matt", "tamara","nejah"];


function middle (array){
	for (var i in array){
		if (array.length%2===0){
		return array[array.length/2]	
		}else{
		return array[(array.length-1)/2]	
		}
		
	}
}
middle (instructors)

//3

 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i],i); 
       } 
 }

 function multiplied (array){
 		var arr = [];
       each(array, function(ele,i){
       	if (i%2===0)
       	arr.push(ele*2);
       }); 
       return arr;
 } 

 