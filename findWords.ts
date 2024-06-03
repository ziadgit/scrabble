function findWords(inputString: string, dictionary:string[]): string[] {
    // make a hashmap of character occurances in inputString
    let charCounts: {[key: string]: number} = {};
    return ["not", "real", "output"]
}

console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]

console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]
