// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function code(string){
	var result=""
	var array=string.split("")
	var obj ={};
	for (var i=0; i<array.length; i++){
		if (obj[array[i]]=== undefined){
			obj[array[i]]=1
		}else {
			obj[array[i]]+=1
		}
	}
	for(var i =0; i<array.length;i++){
		for(var j =1 ; j<obj[array[i]]+1;j++){
			
			result+=j
			
		}

	}
	return result
	
}
