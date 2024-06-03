function findWords(inputString, dictionary) {
    // make a hashmap of character occurances in inputString
    var charCounts = {};
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var char = inputString_1[_i];
        if (charCounts[char] === undefined) {
            charCounts[char] = 0;
        }
        charCounts[char]++;
    }
    console.log(inputString);
    console.log(charCounts);
    return ["not", "real", "output"];
}
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
