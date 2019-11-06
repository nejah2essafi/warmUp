// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

// function instance (text) {
// 	var str = "balloon"
// 	text.toLowerCase()
// 	for (var i =0;i<str.length; i++){
// 		for (var j =0, j<text.length; j++){
// 			if (str[i]===text[j])
// 		}

// 	}
	
// }


function instance (text){
	text.toLowerCase()
	var obj={}
	obj2={}
	var str="ballon"
	for (var i in str){
		if(obj[str[i]]===undefined) {
			obj[str[i]]=1;
		}else {
			obj[str[i]]+=1
		}
	}
	for(var key in obj){

	}
	for (var j in text){

	if(obj2[text[j]]===undefined){
		obj2[text[j]]=1;
	}else{
		obj2[text[j]]+=1
	}
	for(var key in obj){
		
	}
}
	
}
