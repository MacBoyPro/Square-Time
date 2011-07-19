TIMELINE = function () {
    var timerInterval = 1000 / 60000; //Update the display 60 times per second
    var timer = null;
    var startTime = null;
    var duration = 5000;
    var now = function () { return (new Date).getTime() };
    var elapsedTime = function() { return now() - startTime };
    var width = $(window).width();
    var position = function () { return width * (elapsedTime() / duration) };
    var draw = function () {
        $('div#square').offset({left: position() });
    }
    
    return {
      start : function () {
        timer = setInterval(draw, timerInterval);
        startTime = now();
      }
    }
}();
