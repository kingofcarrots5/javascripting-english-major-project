
/* 
//this is the script to print out even and odd
userInput = prompt ("Enter any positive, two digit number to find out if it is even or odd");
while (userInput >= 100) {
    userInput = prompt ("I said, any TWO digit number you fucking cheater");
}    
for (let i = 1; i < userInput; i = i + 1 ) 
    if (i % 2 == 0) {
        $("#response").append("<br />" + i + " is " + " even ");
    } else {
        $("#response").append("<br />" + i + " is " + " odd ");
}
$("#response").append("<br />" + "Actually, figure it out yourself, you cheater.");
*/

/* 
//this is an example of an expanded function
let promptText, defaultText, userInput;
promptText = "What do you want to have for dinner?";
defaultText = "Type your answer here.";
userInput = prompt(promptText, defaultText); 
*/

/*
// this is a tipping calculator
let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  if (tipRate >= 1) {tipAmount = tipRate/100 * total; }
  else {
  tipAmount = tipRate * total; }
  $("#response").html("Your tip is $" + tipAmount);
}
tipCalculator(50.00, .2);

*/

/*
// Scope exercise
let global;
global = "🌏";
let showMeABurrito = function(){
    let burrito;
    burrito = "🌯"; 
    global = "I’m global!";
    console.log("global is " + global);
    console.log("burrito is " + burrito);
  }

  showMeABurrito();

  console.log(global);

  console.log("Wait, the value of burrito is really " + burrito + "?");
  
  */

/*
let arrayOfStrings, arrayOfNumbers, arrayMixed;
  arrayOfStrings = ["a", "b", "c"];
  arrayOfNumbers = [1, 2, 3];
  arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

  $("#response").html(arrayOfStrings[2]);
*/

/*
  let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
  };
// and let’s access a property
$("#response").html(myBurritoObject.tortilla);
*/

/*
let arrayOfStrings;
arrayOfStrings = ["a", "b", "c", "fuck"];
$("#response").html(arrayOfStrings.length)
*/

/*
let  myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 1;
myBurritoObject = {
    tortilla: "wheat",
    guacamole: true,
    beans: "pinto",
    // Make use of the variable above.
    habaneroSauceSquirts: myHabaneroSauceSquirts,
    // Use the variable again in a function.
    spiciness: function(){
      if (myHabaneroSauceSquirts > 1 ){
        alert("This is a spicy burrito!");
      } else {
        alert("This is a mild burrito.");
      }
    }
  };
  $("#response").html("Your burrito has " +
    myBurritoObject.habaneroSauceSquirts +
    " squirts of habanero.");
  myBurritoObject.spiciness();
  */

/*
//this sets an array, and then displays the last item in the array. NOTE that [] is how you set an array
let myList
myList = ["1", "3", "5", "33", "12", "Pilar"]
myListLength = myList.length;
myEndofList = myList[Number(myListLength-1)]
$("#response").html(myEndofList)
*/

let userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
  let result;
  result = ""; 
  for ( let i = 0; i < string.length ; i = i + 1 ) {
    let letter;
    letter = string[i];
    if ( letter === "e" ) {
        result = result + letter;
    } else {
      result = result + letter.toUpperCase();
    }
  }
  return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString);