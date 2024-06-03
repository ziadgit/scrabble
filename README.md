**Objective:**

Implement a function named **`findWords`** that accepts two arguments: 1) an input string and 2) a dictionary. This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

**Experiments**

Prior to this final version, my first attempt tried to create permutations of the input string, and then check those permutations against the included dictionary. This was slow, and did not account for substring permutations, so I switched to a hashmap charCount approach.

**