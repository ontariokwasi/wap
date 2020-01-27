(function() {
  const myfilter = function(...banned) {
    // trying out the rest operator instead of 'arguments' operator
    return this.split(' ').filter((e)=>!banned.find((a)=>a===e)).join(' ');
  };

  String.prototype.filter = myfilter; // override the filter method in String;

  console.log('Good boys are scarce'.filter('are', 'boys'));
})();
