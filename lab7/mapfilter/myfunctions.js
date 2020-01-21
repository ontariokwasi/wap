//my map function takes an array and a function to map the array elements.
function map(inArray, func) {
  let newArray = [];
  for (elem of inArray) {
    newArray.push(func(elem));
  }
  return newArray;
}

//my filter method takes in an array and a predicate, it tests all the array elements with the predicate and insert passed elements into a
//new array and returns the new array
function filter(inArray, predicate) {
  let newArray = [];
  for (elem of inArray) {
    if (predicate(elem)) newArray.push(elem);
  }
  return newArray;
}

const testArray = [1, 2, 3, 4, 5]; //array to test map and filter functions
const testmap = map(testArray, elem => elem * 2);

let filterResult = filter(testArray, elem => elem % 2 === 1);

describe("Map and Filter Test", function() {
  it("Using my map function to double each element of the array [1, 2, 3, 4, 5]. It should return a new array of [2, 4, 6, 8, 10]", function() {
    assert.equal(testmap.toString, [2, 4, 6, 8, 10].toString);
  });

  it("Using my filter function to filter all odd elements of the array [1, 2, 3, 4, 5]. It should return a new odd number array of  [1, 3, 5]", function() {
    assert.equal(filterResult.toString, [1, 3, 5].toString);
  });
});

//logging result to console for personal check
console.log(testmap);
console.log(filterResult);
