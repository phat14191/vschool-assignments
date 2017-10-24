function getDaysBefore(n) {
  var dateOffset = (24*60*60*1000) * n
  var myDate = new Date();
  myDate.setTime(myDate.getTime() - dateOffset);
  return myDate;
};

// console.log(getDaysBefore(2));

function daysAgo(n) {
  let today = new Date();
  today.setDate(today.getDate() - n)
  console.log(today.toDateString());
  console.log(today.getDate());
}
daysAgo(4);
