
let objectifyUrl = function(inputUrl) {
  let query = {};
  inputUrl = inputUrl.slice(inputUrl.indexOf("?") + 1).split(/[&=]/);
  //use regex to split url into an array base on both = and &
  if(inputUrl.length < 2) return {};
  for (let i = 0; i < inputUrl.length; i+=2) {
    query[inputUrl[i]] = inputUrl[i+1]
  }
  return query;
}
console.log(objectifyUrl("http://localhost:8080/monkeys?"));
// module.exports = filterQuery;
