var duration = 5000;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

$(window).on("load", function() {
  setTimeout(function () {
    $('img').each(function() {
      var $this = $(this);
      setTimeout(function() {
        $this.attr('src', Math.random() > .5 ? 'http://reddeervillarvranch.com/animation_clear.gif' : 'http://www.acountrybreezervpark.com/pet%20image.gif');
      }, getRandomArbitrary(0, duration));
    });

    setTimeout(function() {
      $('div').fadeOut(duration);
      setTimeout(function () {
        window.location.href = 'http://www.acountrybreezervpark.com/';
      }, duration/2);
    }, duration);
  }, duration/2);
});
