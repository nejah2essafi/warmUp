// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr (str) {
	var result = "";
	var array = str.split(" ");
	for (var i = array.length-1; i >= 0; i--) {
		result += " "+array[i];

	}
	return result;
}

function reverseStr1 (str) {
	var array=[]
	var res=""
	var result = "";
	for (var j in str){
		if(str[j]=== " ")
	res+=(str.substring(0,j+1))	


	}
	
	for (var i = array.length-1; i >= 0; i--) {
		result += " "+array[i];

	}
	return result;
}