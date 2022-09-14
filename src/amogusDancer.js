var AmogUsDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', 'amogusDancer');
  this.$node.width('100px');
  this.$node.height('100px');
};

AmogUsDancer.prototype = Object.create(Dancer.prototype);
AmogUsDancer.prototype.constructor = AmogUsDancer;

AmogUsDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    left: '+=1400',
  }, 1750);
  this.$node.animate({
    left: '-=1400',
  }, 1750);
};