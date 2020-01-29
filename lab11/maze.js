$(function() {
  /**
     * Use timer to tell user how long they took
     */
  const timer = (() => {
    $timediv = $('#timer');
    let timerID;
    const tick = () => {
      const time = $timediv.text().split(':');
      let h = time[0]; let m = time[1]; let s = time[2];
      s = parseInt(s) + 1;
      if (s >= 60) {
        m = parseInt(m) + 1;
        s = '00';
      }
      if (m >= 60) {
        h = parseInt(h) + 1;
        m = '00';
      }
      const stringtime = h.toString().padStart(2, 0)+':'+m.toString().padStart(2, 0)+':'+s.toString().padStart(2, 0);
      $timediv.text(stringtime);
    };
    const start = () => {
      timerID = setInterval(tick, 1000);
    };
    stop = () => {
      clearInterval(timerID);
    };
    const reset = () =>{
      $timediv.text('00:00:00');
    };
    return {start: start, reset: reset, stop: stop};
  })();

  const maze = (function() {
    const reset = (text) => {
      $('.boundary').removeClass('youlose');
      $('#status').text(text);
      $('#start, #end').css('display', ''); // show start and end divs
      timer.reset();
    };

    const lose = () => {
      $('.boundary').addClass('youlose');
      $('#status').text('You lose:(');
      $('#end').off('mouseover');
      $('.boundary').off('mouseenter');
      $('#maze').off('mouseleave');
      $('#start, #end').css('display', 'none');
      timer.stop();
      // reset automatically after 3 seconds
      setTimeout(reset, 3000, 'Click the "S" to begin.');
    };
    const win = () => {
      $('#status').text('You win!');
      $('.boundary').off('mouseenter');
      $('#maze').off('mouseleave');
      $('#end').off('mouseover');
      $('#start, #end').css('display', 'none'); // hide start and end divs
      timer.stop();
      // reset automatically after 3 seconds
      setTimeout(reset, 3000, 'Click the "S" to begin.');
    };
    const start = ()=>{
      // reset the maze
      reset('Start moving');
      timer.start();
      $('.boundary').on('mouseenter', lose);
      $('#maze').on('mouseleave', lose);
      $('#end').on('mouseover', win);
    };
    return {start: start};
  })();
  /**
   * Using the Revealing model, only the start method is visible;
   */
  $('#start').click(maze.start);
});
