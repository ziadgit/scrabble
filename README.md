**Objective:**

Implement a function named **`findWords`** that accepts two arguments: 1) an input string and 2) a dictionary. This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

**Experiments**

Prior to this final version, my first attempt tried to create permutations of the input string, and then check those permutations against the included dictionary. This was slow, and did not account for substring permutations, so I switched to a hashmap charCount approach.

**CharCount Hashmap approach**

When first reviewing the prompt, I assumed the dictionary was a dictionary data structure, but quickly realized it was just an array. However, I thought maybe this naming convention was a clue, so I started thinking of hash map/hash table possibilities. 

TypeScript now offers a map syntax of let myMap = new Map<string, number>();
However, I decided to use a more traditional object array similar to vanilla javascript.
This similarity is evident in the transpiling of the TypeScript
let charCounts: {[key: string]: number} = {};
to the JavaScript
var charCounts = {};

My general idea for the algorithm was to count the occurances of charcters in the inputString, and then count occurances of characters in the dictionary, and compare the counts.

In the final version, if a word i the hashmap generated from the dictionary words (word ) contain character counts (keys) not found at all in the inputString hash (charCounts) it is removed from the final comparison of the dictionary word character counts to the inputString character counts.

This process was broken down into a few steps with some anonymous functions for style preference (some languages do not allow nested functions, and the prompt did not necessarily seem open to external helper functions perhaps for automated testing). Also, I had a previous naive attempt where the dictionary was iterated through, and if it wasn't a match, it would be removed from the array, however, that introduced a bug of the wrong index being used to slice out subsequent 'misses,' so I abandoned that approach. This bug resulted in me persuing the filter and truth test.

**Futher Ideas**
If I were to continue on this, I would develop a test case generator based in part on the english dictionary for the input string, and randomly generated substrings, perhaps reusing some code from my permutation generator. This would allow for a more stress tested algorithm for time and space complexity.
