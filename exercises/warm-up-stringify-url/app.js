
// Example:
//
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"



let filterDatabase = function(endpoint, query) {
  let url = endpoint + "?";
  for (let key in query) {
    url += `${key}=${query[key]}&`;
  }
  return url.slice(0, -1);
}

module.exports = filterDatabase;
