// Function 1 //
function dwarfRollCall(dwarves) {
    var finalString = ""
    dwarves.forEach(function(dwarf, index){
       var number = index + 1;
       finalString = finalString + number + "." + dwarf + " "
  });
  return finalString
}

dwarfRollCall("Doc", "Dopey", "Bashful", "Grumpy")

/*Function 2 */
function summonCaptainPlanet(planeteerCalls){
  var callString = ""
  planeteerCalls.forEach(function(element, index){
    callString = callString + element.toUpperCase() + "!"+ " "
  });
  return callString
}

summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"])

// Function 3 //
function longPlaneteerCalls(words) {
  var hasFiveOrMore = false;
  words.forEach(function(word){
    if(word.length >= 5){
      hasFiveOrMore= true
    }
  });
  return hasFiveOrMore
}

longPlaneteerCalls(["earth", "wind", "heart", "fire"])


// Function 4 //
function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert"]
  finalCheese = "no cheese"
  foods.forEach(function(food){
    if(cheeses.includes(food))
    {
      finalCheese= food;
    }
  });
  return finalCheese;
}
