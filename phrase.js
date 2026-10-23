let phrase = "Hello world how are you"; 
 
let wordss = phrase.split(" "); 
 
let result = ""; 
 
for (let i = 0; i < wordss.length; i++) { 
    let word = wordss[i]; 
    let reversedWord = ""; 
 
    for (let j = word.length - 1; j >= 0; j--) { 
        reversedWord = reversedWord + word[j]; 
    } 
 
    if (i > 0) { 
        result = result + " "; 
    } 
 
    result = result + reversedWord; 
} 
 
console.log(result);   