/* eslint-disable valid-jsdoc */
(function() {
  'use strict';

  // Exercise 2
  Array.prototype.bubbleSort = bubbleSort;

  const myfilter = function(...banned) {
    // trying out the rest operator instead of 'arguments' operator
    return this.split(' ')
        .filter((e) => !banned.find((a) => a === e))
        .join(' ');
  };

  // Exercise 1: override the filter method in String;
  String.prototype.filter = myfilter;

  /**
   * Bubble sort for sorting array
   */
  function bubbleSort() {
    for (let i = 0; i < this.length; i++) {
      for (let x = 0; x < this.length; x++) {
        if (this[x] > this[x + 1]) {
          // Swap values
          const temp = this[x];
          this[x] = this[x + 1];
          this[x + 1] = temp;
        }
      }
    }
    return this;
  }

  // Exercise 3
  const Person = function() {};
  Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
  };

  Person.prototype.describe = function() {
    return this.name + ', ' + this.age + ' years old.';
  };

  const Teacher = function() {};
  Teacher.prototype = new Person();
  Teacher.prototype.teach = function(subject) {
    return this.name + ' is now teaching ' + subject;
  };
  const teacher = new Teacher();
  teacher.initialize('John Doe', 23);

  describe('w2D6 Unit Testing', function() {
    it('Exercise 1: \'This house is not very nice!\'.filter(\'not\', \'house\'), => \'This is very nice!', function() {
      assert.equal(
          'This house is not very nice!'.filter('not', 'house'),
          'This is very nice!',
      );
    });

    it('Exercise 2: Bubble sort [1, 4, 5, 0, 2] => [0, 1, 2, 4, 5]', function() {
      assert.equal(
          [1, 4, 5, 0, 2].bubbleSort().toString(),
          [0, 1, 2, 4, 5].toString(),
      );
    });

    it('Exercise 3: Teacher/Person Inheritance: teacher.teach(\'WAP\') => John Doe is now teaching WAP', function() {
      assert.equal(teacher.teach('WAP'), 'John Doe is now teaching WAP');
    });
  });
})();
