(function() {
  const myfilter = function(...banned) {
    // trying out the rest operator instead of 'arguments' operator
    return this.split(' ').filter((e)=>!banned.find((a)=>a===e)).join(' ');
  };

  const bubblesort = function(){
      this.min()
  }

  String.prototype.myfilter = myfilter; // override the filter method in String;

  console.log('Good boys are scarce'.myfilter('are', 'boys'));

  // =====class work ======//
 /* class User {
    constructor(name) {
    this.name = name; // calls the setter
    }
    get name() {
    return this.cname; //property must match the name used in the setter
    }
    set name(value) {
    if (value.length < 4) {
    console.log("Name is too short.");
    return;
    }
    this.cname = value; //must set a property name different from the setter name
    }
    }
    let user = new User("John");
    console.log(user.name); // calling the getter
    user.name = "Fre"; //calling the setter
    console.log(user.name); // calling the getter
    user2 = new User(""); // Name too short
*/
    // ====== //
    class User {
      constructor(name = "Anonymous") {
      this.name = name;
      }
      sayHi() {
      console.log(`Hello, ${this.name}!`);
      }}
      fred = new User();
      console.log(fred);
      console.log(fred.__proto__);
      console.log(User.prototype);
      fred.sayHi();
      bob = new User("Bob");
      console.log(bob);
      bob.sayHi();
})();
