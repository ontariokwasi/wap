/*
Hi Professor,

I have successfully completed my homework, it took me about an hour to complete all tasks but I also spent some time trying out some different ways of achieving the same results. It learnt more about the filter/reduce/map and also the assert method for testing the functions I wrote. Below is the link to my page: https://ontariokwasi.github.io/wap/lab5/ . Once you inspect my page and got to the console, you will see all my test outputs logged to the console.
 */

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
  if (typeof a === "object") {
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
  return reversed;
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

/* Tests All methods here */
describe("Mocha test practice ", function() {
  it("Expected output of max(20,10) is 20  ", () =>
    assert.equal(20, max(20, 10)));
  it("Expected output of maxOfThree(5,4,44) is 44  ", () =>
    assert.equal(44, maxOfThree(5, 4, 44)));

  it("Expected output of isVowel('a') is true  ", () =>
    assert.equal(true, isVowel("a")));

  it("Expected output of sum([1,2,3,4,5]) is 15  ", () =>
    assert.equal(15, sum([1, 2, 3, 4, 5])));

  it("Expected output of multiply([1,2,3,4,5]) is 120  ", () =>
    assert.equal(120, multiply([1, 2, 3, 4, 5])));

  it("Expected output of reverse('Hello') is olleH  ", () =>
    assert.equal("olleH", reverse("Hello")));

  it("Expected output of findLongestWord(['hello','Worlds']);   is 6  ", () =>
    assert.equal(6, findLongestWord(["hello", "Worlds"])));

  it("Expected output of filterLongWords(['His','mine','empty'], 3);   is ['mine', 'empty']  ", () =>
    assert.equal(
      ["mine", "empty"].toString(),
      filterLongWords(["His", "mine", "empty"], 3).toString()
    ));
});
