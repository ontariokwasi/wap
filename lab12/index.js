/* eslint-disable require-jsdoc */
$(function() {
  const $width = $('input[name="width"]');
  const $growthAmount = $('input[name="growthAmount"]');
  const $growthRate = $('input[name="growthRate"]');
  const $circle = $('input[name="numCircles"]');
  const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'black'];
  let timer = null;
  $('button').on('click', ()=>{
    const ttl_circles = $circle.val();
    const cwidth = $width.val();
    const gAmt = $growthAmount.val();
    const gRate = $growthRate.val();
    drawCircle(cwidth, ttl_circles);
    growCircle(gAmt, gRate);
  });
  function growCircle(resizeby, rate) {
    if (timer !== null) {
      clearInterval(timer);
    }
    timer = setInterval(resizeCircle, rate, resizeby);
  }
  function resizeCircle(resizeby) {
    let oldwidth = $('.circle')[0].style.width;
    if (!oldwidth) oldwidth = '50px';
    const newwidth = parseInt(resizeby)+parseInt(oldwidth);
    $('.circle').css({'width': newwidth+'px', 'height': newwidth+'px'});
    console.log(oldwidth);
  }

  function drawCircle(width, ttl_circles) {
    const circles = $('<div>');
    let colorIndex = 0;
    while (ttl_circles > 0) {
      if (colorIndex > colors.length) colorIndex = 0;
      circles.append( $('<div>', {'class': 'circle', 'css': {'background-color': colors[colorIndex], 'width': width+'px', 'height': width+'px'}}));
      ttl_circles--;
      colorIndex++;
    }
    $('.circles>div').each(function() {
      this.remove();
    });
    $('.circles').append(circles);
    $('.circle').on('click', function(){this.remove()});
  }
});
