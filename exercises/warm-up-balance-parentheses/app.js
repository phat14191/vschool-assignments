
function check(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count --;
      if (count <0) {
        return false;
      }
    }
  }
    return count === 0;
}

  // loop through strArr
    //track first index of opening and firstt index of closing
    //if no parens -
    // if no opening or no closing - false
    //if if index of closing is after index of opening
      //splice out the opening and closing
      //


  // filter out anything but parens in case there are extra chars
  //one array of openings, one of closing (filter);
    //This will help us know if they are balanced
    //check length of resulting arrays
  //How do we make sure the openings come before the endings?
    //how to use the original filtered array (with both opening and closing)

module.exports = check;



// console.log(check("()"));
