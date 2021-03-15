//write a javascript function that accepts two arguments , a string and a letter and the function will count the number of
//occurences of the specified letter with in the str

var str="function to get the number of occurences of a given letter";
function char_count(){
	//document.writeln(str);
	var letter = "e";
	var letter_Count =0;
	for(var position=0;position<str.length;position++){
		if(str.charAt(position)==letter){
			letter_Count +=1;
		}
	}
	return "<br> Occurence of " +letter + " is= "+ letter_Count;
}

console.log(char_count());