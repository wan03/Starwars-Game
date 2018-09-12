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
var friendAttack = 0;
var enemyCounter = 0;
var $graveyard = $("#dead");
var $enemy = $(".enemy");
var $fight = $("#fight");

obiWanKenobi = {
  health: 140,
  attack: 200,
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

$characters.on("click", function() {

if (start == true) {
previous = this;
$("#your-character").removeClass("hidden")
$main.append(this);
$enemies.removeClass("hidden")
$enemies.append($starting.children());
$enemies.children().attr("j", "enemy");

console.log(this);
start = false;


};
});



$("#enemy").on("click", "img[j='enemy']",function(){
  if (mid == true){
    $fighting.removeClass("hidden")
    $fighting.append(this);
    console.log(this);
    console.log("enemy click works");
    console.log(mid);
    mid = false;
  };
});

$attacking.on("click", function(){
obiattacks();
aniattacks();
tyattacks();
mlattacks();
check();
});

obiattacks = function() {

if ($main.children().hasClass("obi")) {
  friendAttack += obiWanKenobi.attack * 2;
  console.log(friendAttack);
  if ($fight.children().hasClass("ani")){
    anakinSkywalker.health -= friendAttack;
    obiWanKenobi.health -= anakinSkywalker.counterAttack; 
    if (anakinSkywalker.health < 1) {
      $graveyard.removeClass("hidden")
     $graveyard.append($anakin);
     $anakin.attr("class", "dead");
     mid = true;
     } else if (obiWanKenobi.health < 1) {
      console.log("You have lost")
     };
    
  } else if ($fight.children().hasClass("ty")) {
    darthTyranus.health -= friendAttack;
    obiWanKenobi.health -= darthTyranus.counterAttack; 
    if (darthTyranus.health < 1) {
      $graveyard.removeClass("hidden")
     $graveyard.append($tyranus);
     $tyranus.attr("class", "dead");
     mid = true;
    } else if (obiWanKenobi.health < 1) {
      console.log("You have lost")
     };    
} else if ($fight.children().hasClass("ml")) {
  darthMaul.health -= friendAttack;
  obiWanKenobi.health -= darthMaul.counterAttack; 
  if (darthMaul.health < 1){
    $graveyard.removeClass("hidden")
   $graveyard.append($maul);
   $maul.attr("class", "dead");
   mid = true;
  } else if (obiWanKenobi.health < 1) {
    console.log("You have lost")
   };
};
};
};

aniattacks = function() {

  if ($main.children().hasClass("ani")) {
    friendAttack += anakinSkywalker.attack * 2;
    console.log(friendAttack);
    if ($fight.children().hasClass("obi")){
      obiWanKenobi.health -= friendAttack;
      anakinSkywalker.health -= obiWanKenobi.counterAttack; 
      if (obiWanKenobi.health < 1) {
        $graveyard.removeClass("hidden")
       $graveyard.append($obiWan);
       $anakin.attr("class", "dead");
       mid = true;
       } else if (anakinSkywalker.health < 1) {
        console.log("You have lost")
       };
      
    } else if ($fight.children().hasClass("ty")) {
      darthTyranus.health -= friendAttack;
      anakinSkywalker.health -= darthTyranus.counterAttack; 
      if (darthTyranus.health < 1) {
        $graveyard.removeClass("hidden")
       $graveyard.append($tyranus);
       $tyranus.attr("class", "dead");
       mid = true;
      } else if (anakinSkywalker.health < 1) {
        console.log("You have lost")
       };    
  } else if ($fight.children().hasClass("ml")) {
    darthMaul.health -= friendAttack;
    anakinSkywalker.health -= darthMaul.counterAttack; 
    if (darthMaul.health < 1){
      $graveyard.removeClass("hidden")
     $graveyard.append($maul);
     $maul.attr("class", "dead");
     mid = true;
    } else if (anakinSkywalker.health < 1) {
      console.log("You have lost")
     };
  };
  };
  };

tyattacks = function() {

    if ($main.children().hasClass("ty")) {
      friendAttack += darthTyranus.attack * 2;
      console.log(friendAttack);
      if ($fight.children().hasClass("ani")){
        anakinSkywalker.health -= friendAttack;
        darthTyranus.health -= anakinSkywalker.counterAttack; 
        if (anakinSkywalker.health < 1) {
          $graveyard.removeClass("hidden")
         $graveyard.append($anakin);
         $anakin.attr("class", "dead");
         mid = true;
         } else if (darthTyranus.health < 1) {
          console.log("You have lost")
         };
        
      } else if ($fight.children().hasClass("obi")) {
        obiWanKenobi.health -= friendAttack;
        darthTyranus.health -= obiWanKenobi.counterAttack; 
        if (obiWanKenobi.health < 1) {
          $graveyard.removeClass("hidden")
         $graveyard.append($obiWan);
         $tyranus.attr("class", "dead");
         mid = true;
        } else if (darthTyranus.health < 1) {
          console.log("You have lost")
         };    
    } else if ($fight.children().hasClass("ml")) {
      darthMaul.health -= friendAttack;
      darthTyranus.health -= darthMaul.counterAttack; 
      if (darthMaul.health < 1){
        $graveyard.removeClass("hidden")
       $graveyard.append($maul);
       $maul.attr("class", "dead");
       mid = true;
      } else if (darthTyranus.health < 1) {
        console.log("You have lost")
       };
    };
    };
    };

mlattacks = function() {

      if ($main.children().hasClass("ml")) {
        friendAttack += darthMaul.attack * 2;
        console.log(friendAttack);
        if ($fight.children().hasClass("ani")){
          anakinSkywalker.health -= friendAttack;
          darthMaul.health -= anakinSkywalker.counterAttack; 
          if (anakinSkywalker.health < 1) {
            $graveyard.removeClass("hidden")
           $graveyard.append($anakin);
           $anakin.attr("class", "dead");
           mid = true;
           } else if (darthMaul.health < 1) {
            console.log("You have lost")
           };
          
        } else if ($fight.children().hasClass("ty")) {
          darthTyranus.health -= friendAttack;
          darthMaul.health -= darthTyranus.counterAttack; 
          if (darthTyranus.health < 1) {
            $graveyard.removeClass("hidden")
           $graveyard.append($tyranus);
           $tyranus.attr("class", "dead");
           mid = true;
          } else if (darthMaul.health < 1) {
            console.log("You have lost")
           };    
      } else if ($fight.children().hasClass("obi")) {
        obiWanKenobi.health -= friendAttack;
        darthMaul.health -= obiWanKenobi.counterAttack; 
        if (obiWanKenobi.health < 1){
          $graveyard.removeClass("hidden")
         $graveyard.append($obiWan);
         $maul.attr("class", "dead");
         mid = true;
        } else if (darthMaul.health < 1) {
          console.log("You have lost")
         };
      };
      };
      };

check = function (){
  if (mid == true && $enemies.is(':empty')){
    console.log("It works")
  }

};






});