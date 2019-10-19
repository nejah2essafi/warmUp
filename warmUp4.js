// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function reverse (string){
	var result="";
	i=0 ;
	while(i<string.length){
		result=result+(i)+string[string.length-1-i];
		i++
	}
	return result;
}


function same (array){
	var arr=[];
	var sam=array[0].length
	for (var i=0; i<array.length;i++ ){
		if (sam=== array[i].length){
			
			arr.push(array[i])
			

		}
	}
	return arr
}