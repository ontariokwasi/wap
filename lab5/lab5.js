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
  }
}

/*#2. max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}
/*#3. isVowel takes in a character and test if it is a vowel or not */
function isVowel(c) {
  let v = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < v.length; i++) {
    if (c.toLowerCase() === v[i]) return true;
  }
  return false;
}
/*#4a. Sum of all the elements in an array*/
function sum(a) {
  if (typeof a === "object") {
    toatal = 0;
    for (let i = 0; i < a.length; i++) {
      elem = a[i];
      if (typeof elem === "number") toatal += elem;
      else return "Invalid Type encountered!";
    }
    return toatal;
  }
  return "Input should be an array";
}
/*#4b. multiply all the elements in an array*/
function multiply(a) {
  if (typeof a === object) {
    toatal = 1;
    for (let i = 0; i < a.length; i++) {
      elem = a[i];
      if (typeof elem === "number") toatal *= elem;
      else return "Invalid Type encountered!";
    }
    return toatal;
  }
  return "Input should be an array";
}
/*#5. reverse a given line of strings*/

function reverse(phrase) {
  let reversed = "";
  for (let i = 0; i < phrase.length; i++) {
    reversed = phrase.charAt(i) + reversed;
  }
}
/*Finds the longest String in an array, returns null if the array is empty*/

function findLongestWord(wordsArray) {
  //let longest = null;
  let maxlength = 0;
  wordsArray.forEach(elem => {
    if (elem.length > maxlength) {
      maxlength = elem.length;
      //longest = elem;
    }
  });

  //return longest;
  return maxlength;
}
/***#6. Returns an array of words longer than a given length */
function filterLongWords(wordsArray, i) {
  let longwords = [];
  wordsArray.forEach(elem => {
    if (elem.length > i) {
      longwords.push(elem);
    }
  });
  return longwords;
}
/*
Modify the jsfiddle on the map/filter/reduce slide as follows:

a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;
*/

/* Tests All methods here */

console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);
console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);

console.log(
  "Expected output of isVowel('a') is true  " +
    myFunctionTest(true, isVowel("a"))
);

console.log(
  "Expected output of sum([1,2,3,4,5]) is 15  " +
    myFunctionTest(15, sum([1, 2, 3, 4, 5]))
);

console.log(
  "Expected output of multiply([1,2,3,4,5]) is 120  " +
    myFunctionTest(120, sum([1, 2, 3, 4, 5]))
);

console.log(
  "Expected output of reverse('Hello') is olleH  " +
    myFunctionTest("olleH", reverse("Hello"))
);

console.log(
  "Expected output of findLongestWord(['hello','Worlds']);   is 6  " +
    myFunctionTest(6, findLongestWord(["hello", "Worlds"]))
);

console.log(
  "Expected output of filterLongWords(['His','mine','empty'], 3);   is ['mine', 'empty']  " +
    myFunctionTest(
      ["mine", "empty"],
      filterLongWords(["His", "mine", "empty"], 3)
    )
);
