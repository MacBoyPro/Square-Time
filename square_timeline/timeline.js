TIMELINE = function () {
    var timerInterval = 1/24; //Update the display 60 times per second
    var timer = null;
    var startTime = null;
    var duration = 15000;
    var now = function () { return (new Date).getTime() };
    var elapsedNow, previousElapsedNow;
    var elapsedTime = function() { previousElapsedNow = elapsedNow ; elapsedNow = now(); return elapsedNow - startTime; };
    var width = $(window).width();
    var iteration = 1;
    var step = 1;
    var position = function () { return iteration * step };
    var square = null;
    var previousPosition = 0;
    var draw = function () {
        
        var newPosition = position();
        var currentPosition = parseInt(square.style.left);
        if (isNaN(currentPosition)) { currentPosition = 0 };
        
        //if (currentPosition < newPosition) {
//          if (newPosition - previousPosition > 1) {
//            console.log("previousPosition " + previousPosition + " newPosition " + newPosition + " currentPosition " + currentPosition + " difference: " + (newPosition - previousPosition));
//            console.log("previousElapsedNow " + previousElapsedNow + " elapsedNow " + elapsedNow + " difference: " + (elapsedNow - previousElapsedNow));
//          }
            square.style.left = newPosition + "px";
            previousPosition = newPosition;
            iteration = iteration + 1;
            //if (newPosition <= width) { 
            //  timer = setTimeout(draw, timerInterval);
            //};
        //};
    }
    
    return {
      start : function () {
        square = document.getElementById('square');
        startTime = now();
        timer = setInterval(draw, timerInterval);
        //timer = setTimeout(draw, timerInterval);
      }
    }
}();
