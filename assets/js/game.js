$( document ).ready(function() {


var $characters = $(".character");
var $main = $("#your-character");
var $enemies = $("#enemy");
var $fighting = $("#fight");
var $obiWan = $(".obi");
var $anakin = $(".ani");
var $tyranus = $(".ty");
var $maul = $(".ml");
var start = true;
var mid = true;
var $starting = $("#starting");
var $attacking = $(".attack");

obiWanKenobi = {
  health: 140,
  attack: 20,
  counterAttack: 50,
};

anakinSkywalker = {
  health: 120,
  attack: 50,
  counterAttack: 20,
};

darthTyranus = {
  health: 120,
  attack: 25,
  counterAttack: 32,
};

darthMaul = {
  health: 105,
  attack: 32,
  counterAttack: 15,
};

initialSelection = function() {

};

$characters.on("click", function(){

if (start == true) {
previous = this;

$main.append(this);
$enemies.append($starting.children());
$enemies.children().attr("j", "enemy");

console.log(this);
start = false;


});



$(".enemy").on("click", function(){
  if (mid == true){
    $fighting.append(this);
    mid = false;
  };
});

$attacking.on("click", function(){
if ($main.children().attr(obi)) {
  
}



});












});