var AstleyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'astleyDancer');
  this.$node.width('100px');
  this.$node.height('100px');
};

AstleyDancer.prototype = Object.create(Dancer.prototype);
AstleyDancer.prototype.constructor = AstleyDancer;

AstleyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.show('slow');
  this.$node.animate({left: "+=100"}, 2000);
  this.$node.slideToggle( 1000 );
  this.$node.slideToggle( "fast" );
  this.$node.animate({ left: "-=100" }, 1500 );
  this.$node.hide( "slow" );
  this.$node.show( 1200 );
  this.$node.slideUp( "normal");
};
