$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  var lineItUp = function () {
    debugger;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      Dancer.prototype.lineUp.call(dancer);
    }
  };

  //Event Listener for Line Up button
  $('.lineUpButton').on('click', function(event) {
    lineItUp();
  });

  //Adding Rick Roll audio to to DOM;
  var rickAudio = document.createElement('audio');
  rickAudio.setAttribute('src', './assets/giveyouup.mp3');

  //Event handlers for Rick Roll;
  var mouseEnter = function () {
    rickAudio.play();
  };

  var mouseLeave = function () {
    rickAudio.pause();
  };
  //Event listener for Rick Roll;
  $(document).on('mouseenter', '#astleyDancer', mouseEnter).on('mouseleave', '#astleyDancer', mouseLeave);

});
