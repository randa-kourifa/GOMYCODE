Checkpoints exercices:

number of words in a setence
two words are separated by a only space
ex: countWords('hello world') => 2

---

Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
array 1 : [3, 1, 7, 9], array 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2)

hint: remember how we used the hash table to count this time
you don't need to count just check if something is true or not...

---

Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
array 1: [12, 13, 6, 10]
array 2: [13, 10, 16, 15]
Common elements are 10, 13
Sum of overlapping elements: 46 (13 + 10)\*2

---

1.write a JS function to convert a number in second into hours, minutes and seconds.
ex: convert(3700) => this will return the string "1h 1m 40s"

2.Write JS function to count the number of vowels(a,e,u,i,o) in a given string
ex: countVowels('hello') => 2

3.given a set of 2 arrays, write a JS function to find the common elements between them.
ex: commonElements([1, 2, 3], [4, 3, 2]) => [2, 3]

4.Write a JS function to find the longest string in a given array of strings.
ex: longestString(['a', 'ab', 'abc']) => 'abc'

5.given a set of 2 arrays, write a JS function to calculate the sum
ex: sum([1, 2, 3], [4, 5, 6]) => 21

6.You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
ex: likes [] // must be "no one likes this"
likes (["Peter"]) // must be "Peter likes this"
likes (["Jacob", "Alex"]) // must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"])// must be "Max, John and Mark like this"
likes( ["Alex", "Jacob", "Mark", "Max"]) // must be "Alex, Jacob and 2 others like this"

7.Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Max", "John", "Mark"] --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]--> "Alex, Jacob and 2 others like this"

8.sum of digits
examples:
sumOfDigits(16) --> 1 + 6 = 7
sumOfDigits(942) --> 9 + 4 + 2 = 15
sumOfDigits(132189) --> 1 + 3 + 2 + 1 + 8 + 9 = 24
sumOfDigits(493193) --> 4 + 9 + 3 + 1 + 9 + 3 = 29

9.Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]

10.sum of number from 1 to n
ex: sum(5) => return 15 because (1+2+3+4+5)

11. word Plural
    you have an array of string add "s" for words that are doesnt end with "s"
    ex: plural(['cow', 'pig', 'cow', 'cow']) => ['cows', 'pig', 'cows', 'cows']

12.If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
