// 1-using + operator combine your partner first and last name .
function fullName(first, last) {
	
	return "my partner is "+first+" "+last
}
// 2-find if the number 13 is a multiple of 3 or not.
function isMultiple(num) {
	if (num % 3===0){
		return num +" is multiple of 3"
	}else{
		return num + " not multiple of 3"
	}

}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average (array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result = result + array[i]

	}
	return result / array.length
}
// 4-calculate your age in seconds.
function second (age){
	var result = age * 356 * 24 * 60 * 60
	return result
}

// your code is here 

