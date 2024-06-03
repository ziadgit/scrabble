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
    // do same thign but for every word in dictionary
    var dictCharCounts = function (word) {
        var wordCounts = {};
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (wordCounts[char] === undefined) {
                wordCounts[char] = 0;
            }
            wordCounts[char]++;
        }
        return wordCounts;
    };
    // filter the dictionary to get rid of words that contain characters not at all in inputString
    var filteredDictionary = dictionary.filter(function (word) {
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            if (!charCounts[char])
                return false;
        }
        return true;
    });
    // array for valid words
    var validWords = [];
    for (var _a = 0, filteredDictionary_1 = filteredDictionary; _a < filteredDictionary_1.length; _a++) {
        var word = filteredDictionary_1[_a];
        var wordCounts = dictCharCounts(word);
        var isValid = true;
        for (var char in wordCounts) {
            if (charCounts[char] === undefined || charCounts[char] < wordCounts[char]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            validWords.push(word);
        }
    }
    return validWords;
}
// Hardcoded test cases and dictionaries
// Consider edge cases, such as input strings with a single character or repeated letters.
var testCases = [
    { word: "ate", dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"] },
    { word: "a", dictionary: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good", "a", "i"] },
    { word: "bar", dictionary: ["bar", "bra", "ar", "ba"] },
    { word: "hello", dictionary: ["hello", "hell", "helloo", "helo", "ho", "lo", "oll", "el"] },
    { word: "ll", dictionary: ["hello", "hell", "helloo", "helo", "ho", "lo", "oll", "el", "lll", "ll"] },
    { word: "world", dictionary: ["world", "word", "lord", "old", "ow", "low", "or", "do"] },
    { word: "goodbye", dictionary: ["goodbye", "good", "bye", "god", "dog", "do", "go"] },
    { word: "programming", dictionary: ["programming", "program", "gram", "ram", "gaming", "gong", "roam", "map"] },
    { word: "apple", dictionary: ["apple", "app", "ape", "ale", "pea", "plea", "pal"] },
    { word: "banana", dictionary: ["banana", "bana", "bananaa", "nana", "ban", "anna", "bann"] },
    { word: "computer", dictionary: ["computer", "comp", "puter", "compute", "put", "mute", "come"] },
    { word: "science", dictionary: ["science", "sci", "sin", "sine", "ice", "nice", "sin"] },
    { word: "javascript", dictionary: ["javascript", "java", "script", "java", "script", "scr", "scripta"] },
    { word: "programming", dictionary: ["programming", "program", "gram", "ram", "gaming", "gong", "roam", "map"] },
    { word: "learning", dictionary: ["learning", "learn", "learnin", "lear", "learnig", "ing", "ring"] },
    { word: "knowledge", dictionary: ["knowledge", "know", "knowle", "ledge", "nod", "wed", "gone"] },
    { word: "communication", dictionary: ["communication", "comm", "uni", "com", "commun", "tion", "comun"] },
    { word: "internet", dictionary: ["internet", "net", "inter", "tern", "ten", "inn", "tin"] },
    { word: "web", dictionary: ["web", "we", "be", "b", "ebb", "eb", "ewe"] },
    { word: "application", dictionary: ["application", "app", "cat", "cata", "plate", "tion", "platon"] },
    { word: "algorithm", dictionary: ["algorithm", "al", "go", "rhythm", "algo", "rhythm", "log", "mum"] },
    { word: "database", dictionary: ["database", "data", "base", "bsae", "data", "base", "db", "dabase"] },
    { word: "programming", dictionary: ["programming", "program", "gram", "ram", "gaming", "gong", "roam", "map"] },
    { word: "development", dictionary: ["development", "develop", "ment", "dev", "even", "eep", "tomb"] },
    { word: "interface", dictionary: ["interface", "inter", "ace", "face", "int", "tin", "ear"] },
    { word: "software", dictionary: ["software", "soft", "ware", "war", "far", "oft", "fare"] },
    { word: "function", dictionary: ["function", "fun", "funct", "fnuct", "tion", "funn", "funk", "tick"] },
    { word: "aabbc", dictionary: ["abc", "abb", "aabb", "aac", "bca", "cba"] }
];
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
// Iterate over the test cases
testCases.forEach(function (testCase, index) {
    console.log("\nTest Case ".concat(index + 1, ":"));
    console.log("Input String:", testCase.word);
    console.log("Dictionary:", testCase.dictionary);
    var result = findWords(testCase.word, testCase.dictionary);
    console.log("Result:", result);
});
