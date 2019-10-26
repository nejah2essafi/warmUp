//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset (array, sub ) {
	var str1 = array.join("");
	var str2= sub.join("");
	if ((str1.indexOf(str2))!==-1){
		return true;
	}
	else {
		return false
	}
	

}

