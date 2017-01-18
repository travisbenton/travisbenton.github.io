var duration = 5000;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
$(document).ready(function() {
  $('img').each(function() {
    var $this = $(this);
    setTimeout(function() {
      $this.attr('src', Math.random() > .5 ? 'https://reddeervillarvranch.com/animation_clear.gif' : 'https://www.acountrybreezervpark.com/pet%20image.gif');
    }, getRandomArbitrary(0, duration));
  });

  setTimeout(function() {
    $('div').fadeOut(duration);
    setTimeout(function () {
      window.location.href = 'http://www.acountrybreezervpark.com/';
    }, duration/2);
  }, duration);
});
