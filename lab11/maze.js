$(function() {
  const maze = (function() {
    const reset = (text) => {
      $('.boundary').removeClass('youlose');
      $('#status').text(text);
      $('#start, #end').css('display', ''); // show start and end divs
    };

    const lose = () => {
      $('.boundary').addClass('youlose');
      $('#status').text('You lose:(');
      $('#end').off('mouseover');
      $('.boundary').off('mouseenter');
      $('#maze').off('mouseleave');

      $('#start, #end').css('display', 'none');
      // reset automatically after 3 seconds
      setTimeout(reset, 3000, 'Click the "S" to begin.');
    };
    const win = () => {
      $('#status').text('You win!');
      $('.boundary').off('mouseenter');
      $('#maze').off('mouseleave');
      $('#end').off('mouseover');
      $('#start, #end').css('display', 'none'); // hide start and end divs
      // reset automatically after 3 seconds
      setTimeout(reset, 3000, 'Click the "S" to begin.');
    };
    const start = ()=>{
      // reset the maze
      reset('Start moving');
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
