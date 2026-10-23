let sentence = "I like testing, and I love coding and , I like solving problems";

let words = sentence.toLowerCase().split(" ");
let wordCount = {};

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
}

console.log("Duplicate words:");

for (let word in wordCount) {
    if (wordCount[word] > 1) {
        console.log(word + " : " + wordCount[word] + " times");
    }
}