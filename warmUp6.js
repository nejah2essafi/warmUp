 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 	if(n===1){
 		return 1
 	}else if(n===0){
 		return 0
 	}
 	return n*mult(n-1)
 }

 	

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function  build (n){
	var str="1"
	var i=2
	while(i<n+1){

		str=str+i+i
		i++
	}
	return str
		
}
