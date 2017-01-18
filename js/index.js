var duration = 5000;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

$('img').each(function() {
  var $this = $(this);
  setTimeout(function() {
    $this.attr('src', 'http://reddeervillarvranch.com/animation_clear.gif');
  }, getRandomArbitrary(0, duration));
});

setTimeout(function() {
  $('div').fadeOut(duration);
  setTimeout(function () {
    window.location.href = 'http://www.reddeervillarvranch.com/';
  }, duration);
}, duration);
