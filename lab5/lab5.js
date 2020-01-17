
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/*#1. max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

/*#2. max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
/*#3. isVowel takes in a character and test if it is a vowel or not */
function isVowel(c){
    let v = ['a', 'e','i', 'o','u'];
    for(i=0; i<v.length; i++){
        //if(c.)
    }
}
/*
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
Modify the jsfiddle on the map/filter/reduce slide as follows:

a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;
*/ 

/* Tests All methods here */ 
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
