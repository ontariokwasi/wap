/* eslint-disable require-jsdoc */
(function() {
  /**
   * Displays the current time to the console.
   * @param {String} template .
   * @return {Object} a new object of time .
   */
  class Clock {
    constructor(template) {
      this.template = template;
    }

    render() {
      const date = new Date();
      let hours = date.getHours();
      if (hours < 10) {
        hours = '0' + hours;
      }
      let mins = date.getMinutes();
      if (mins < 10) {
        mins = '0' + mins;
      }
      let secs = date.getSeconds();
      if (secs < 10) {
        secs = '0' + secs;
      }
      const output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
      document.getElementById('clock').innerHTML = output;
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
      setTimeout(() => this.stop(), 10000); // stop timer after 10s
    }
  }
  const clock = new Clock('h:m:s');
  clock.start();

  // mocha test
  //   const p = new Date();
  //   const at = p.getHours+":"+p.getMinutes+':'+p.getSeconds;
  describe('Clock rendering Unit Testing', function() {
  });
})();
