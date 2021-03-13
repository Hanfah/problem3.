var myString = "how many times does t come in this sentence?"
count = 0;

for(var i = 0; i < myString.length; i++) {

	if(myString.charAt(i) === 't') {
		count++;
	}
}

console.log(count);