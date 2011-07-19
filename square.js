
SQUARE = {};
SQUARE.timerInterval = 1000 / 60000; //Update the display 60 times per second
SQUARE.timer = null;
SQUARE.step = 10;

SQUARE.start = function () {
    SQUARE.timer = setInterval(SQUARE.draw, SQUARE.timerInterval);
};

SQUARE.draw = function () {
    var currentPosition = $('div#square').offset().left;
    $('div#square').offset({left: currentPosition + SQUARE.step});
};