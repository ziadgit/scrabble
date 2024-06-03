function findWords(inputString: string, dictionary:string[]): string[] {
    // make a hashmap of character occurances in inputString
    let charCounts: {[key: string]: number} = {};

    for (let char of inputString) {
        if (charCounts[char] === undefined) {
            charCounts[char] = 0;
        }
        charCounts[char]++
    }
    console.log(inputString);
    console.log(charCounts);

    // do same thign but for every word in dictionary
    let dictCharCounts = (word: string): {[key: string]: number} => {
        let wordCounts: {[key: string]: number} = {};
        for (let char of word) {
            if(wordCounts[char] === undefined) {
                wordCounts[char] = 0
            }
            wordCounts[char]++;
        }
        return wordCounts;
    }

    // array for valid words
    let validWords: string[] = [];

    for (let word of dictionary) {
        let wordCounts = dictCharCounts(word);
        let isValid = true;

        for(let char in wordCounts) {
            if (charCounts[char] === undefined || charCounts[char] < wordCounts[char]) {
                isValid = false;
                break;
            }
        }
         if(isValid) {
            validWords.push(word);
         }
    }
    return validWords
}

console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]

console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
