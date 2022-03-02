var MakeJumpingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Images/Jumpy.png" class="dancer jumper" >');
};

MakeJumpingDancer.prototype = Object.create(MakeDancer.prototype);
MakeJumpingDancer.prototype.constructor = MakeJumpingDancer;

MakeJumpingDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};