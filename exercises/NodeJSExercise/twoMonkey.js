// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.



var monkeyTrouble = function(aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && bSmile) ) {
    return true;
  } else {
    return false;
  }
}
    hello
      because
       that cool
        
//   if (aSmile === bSmile) {
//     return "You re NOT safe!"
//   }
//  else {
//   return "You're safe!"
//   }
// }

console.log(monkeyTrouble(true, false))
