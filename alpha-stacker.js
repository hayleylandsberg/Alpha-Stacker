var alphabet = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
];

var letters = '';

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
 	for(var i = 0; i < theAlphabetArray.length; i += 1) {
		if (i % 3 === 0 && i !== 0){
			letters += ' ';
		}
		letters += theAlphabetArray[i];
		console.log(letters);
	}

    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
}

// Invoke the function and pass in the array
stackLetters(alphabet)

