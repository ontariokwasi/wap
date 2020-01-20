/*
Hi Professor,

I have successfully completed my homework, it took me about an hour to complete all tasks but I also spent some time trying out some different ways of achieving the same results. It learnt more about the filter/reduce/map and also the assert method for testing the functions I wrote. Below is the link to my page: https://ontariokwasi.github.io/wap/lab5b/ . Once you inspect my page and got to the console, you will see all my test outputs logged to the console.
 */

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected.toString() === found.toString()) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/*#4a. Sum of all the elements in an array*/
function sum(a) {
  if (a instanceof Array) {
    return a.reduce((prev, next) => prev + next, 0);
  }
  return "Input should be an array";
}
/*#4b. multiply all the elements in an array*/
function multiply(a) {
  if (a instanceof Array) {
    return a.reduce((prev, next) => prev * next, 1);
  }
  return "Input should be an array";
}
/*#5. reverse a given line of strings*/

function reverse(phrase) {
  return phrase.split("").reduce((prev, next) => next + prev, "");
}

/***#6. Returns an array of words longer than a given length */
function filterLongWords(wordsArray, i) {
  return wordsArray.filter(elem=>elem.length>i);
}

/* Tests All methods here */

console.log(
  "Expected output of sum([1,2,3,4,5]) is 15  " +
    myFunctionTest(15, sum([1, 2, 3, 4, 5]))
);

console.log(
  "Expected output of multiply([1,2,3,4,5]) is 120  " +
    myFunctionTest(120, multiply([1, 2, 3, 4, 5]))
);

console.log(
  "Expected output of reverse('Hello') is olleH  " +
    myFunctionTest("olleH", reverse("Hello"))
);

console.log(
  "Expected output of filterLongWords(['His','mine','empty'], 3);   is ['mine', 'empty']  " +
    myFunctionTest(
      ["mine", "empty"],
      filterLongWords(["His", "mine", "empty"], 3)
    )
);

//**Using Console.assert**//
console.assert(
  sum([1, 2, 3, 4, 5]) === 15,
  "FAILED! Expected output of sum([1,2,3,4,5]) is 15 but Found " +
    sum([1, 2, 3, 4, 5])
);

console.assert(
  multiply([1, 2, 3, 4, 5]) === 120,
  "Expected output of multiply([1,2,3,4,5]) is 120 but found " +
    multiply([1, 2, 3, 4, 5])
);

console.assert(
  reverse("Hello") === "olleH",
  "Expected output of reverse('Hello') is olleH  but found " + reverse("Hello")
);

console.assert(
  filterLongWords(["His", "mine", "empty"], 3).toString() ===
    ["mine", "empty"].toString(),
  "Expected output of filterLongWords(['His','mine','empty'], 3);   is ['mine', 'empty']  " +
    filterLongWords(["His", "mine", "empty"], 3)
);
