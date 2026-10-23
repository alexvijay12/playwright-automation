
const sentence = "I like testing, and I love coding and , I like solving problems";

const words = sentence
    .replace(/,/g, " ")
    .split(" ")
    .filter(word => word !== "");
const wordCount = {
} ;


for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log(wordCount);
for (const word in wordCount) {
    if (wordCount[word] > 1) {
        console.log(word, ":", wordCount[word]);
    }
}
