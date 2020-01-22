(() => {
  "use strict";
  const reverseArray = inputArray => {
    const outputArray = [];
    const n = inputArray.length;
    inputArray.forEach((element, i) => {
      outputArray[n - (i + 1)] = element;
    });
    return outputArray;
  };
  const reverseArrayInPlace = inputArray => {
    let start = 0;
    let end = inputArray.length - 1;
    while (start < end) {
      let temp = inputArray[start];
      inputArray[start] = inputArray[end];
      inputArray[end] = temp;
      start++;
      end--;
    }
  };

  //Using the revealing module pattern for my list, it allows me to make the nthRecursiveHelper() private
  // BEGIN LIST MODULE//
  const listmodule = (() => {
    const arrayToList = inputArray => {
      let list = null;
      let last = null;
      inputArray.forEach(element => {
        let newList = { value: element, rest: null };
        if (!list) {
          list = newList;
        } else {
          last.rest = newList;
        }
        last = newList;
      });
      return list;
    };

    const listToArray = inputList => {
      const outputArray = [];
      let next = inputList;
      let pos = 0;
      while (next) {
        outputArray[pos++] = next.value;
        next = next.rest;
      }
      return outputArray;
    };
    const prepend = (elem, list) => {
      return { value: elem, rest: list };
    };
    const nth = (list, pos) => {
      let start = 0;
      let next = list;
      if (pos < 0) return undefined;
      while (next) {
        if (start === pos) return next.value;
        next = next.rest;
        start++;
      }
      return undefined;
    };

    const nthRecursiveHelper = (list, pos, start) => {
      if (list === null) return undefined;
      else if (pos === start) return list.value;
      else return nthRecursiveHelper(list.rest, pos, ++start);
    };

    const nthRecursive = (list, pos) => {
      let start = 0;
      if (pos < 0) return undefined;
      return nthRecursiveHelper(list, pos, start);
    };
    return {
      arrayToList: arrayToList,
      listToArray: listToArray,
      prepend: prepend,
      nth: nth,
      nthRecursive: nthRecursive
    };
  })();
  //   END LIST MODULE
  const deepEquals = (ob1, ob2) => {
    if (ob1 === null && ob2 === null) return true;
    else if (ob1 === null || ob2 === null) return false;
    else if (typeof ob1 !== typeof ob2) return false;
    else if (typeof ob1 === "object") {
    } else {
    }
  };

  //testarray
  const testArray = [1, 2, 3, 4];
  console.log("Reverse: " + reverseArray(testArray));
  reverseArrayInPlace(testArray);
  console.log("Reverse: " + testArray);
  console.log(listmodule.arrayToList(testArray));
  console.log(listmodule.listToArray(listmodule.arrayToList(testArray)));
  console.log(listmodule.prepend(6, listmodule.arrayToList(testArray)));
  console.log(listmodule.nth(listmodule.arrayToList(testArray), 1));
  console.log(listmodule.nthRecursive(listmodule.arrayToList(testArray), 1, 0));

  //
  /** Mocha unit test here */
  describe("Javascript Practice", function() {
    /** Reverse Array */
    it("reverseArray([1,2,3,4]) should return [4,3,2,1]", function() {
      assert.equal(
        reverseArray([1, 2, 3, 4]).toString(),
        [4, 3, 2, 1].toString()
      );
    });

    /** Reverse Array Inplace */
    it("reverseArrayInPlace([1,2,3,4]) should return [4,3,2,1]", function() {
      assert.equal(
        reverseArrayInPlace([1, 2, 3, 4]).toString(),
        [4, 3, 2, 1].toString()
      );
    });

    it("deepEqual(user,user1) should return true", function() {
      assert.equal(deepEqual(user, user1).apply(), true);
    });
  });
})();
