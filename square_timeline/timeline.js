TIMELINE = {
    timerInterval : 1000 / 60000, //Update the display 60 times per second
    timer : null,
    startTime : null,
    duration : 5000,
    now : function () { return (new Date).getTime() },
    elapsedTime : function() { return this.now() - this.startTime },
    width : $(window).width(),
    position : function () { return this.width * (this.elapsedTime() / this.duration) }
};

TIMELINE.start = function () {
    TIMELINE.timer = setInterval(TIMELINE.draw, TIMELINE.timerInterval);
    TIMELINE.startTime = TIMELINE.now();
};

TIMELINE.draw = function () {
    $('div#square').offset({left: TIMELINE.position() });
};