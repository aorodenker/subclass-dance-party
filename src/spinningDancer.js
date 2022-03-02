var MakeSpinningDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src ="Images/Spinny.png" class="dancer spinner">');
};

MakeSpinningDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinningDancer.prototype.constructor = MakeSpinningDancer;

MakeSpinningDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

// function roulette_spin(btn){
//   var rand = Math.floor(Math.random() * 720) + 540;

//   $('.roulette_wheel img').css('transform','rotate('+rand+'deg)');
// }


// $('.spin').click(function(){
//   roulette_spin($(this).siblings('img'));
// });