const express = require("express");
const app = express();
// const uuid = require("uuid/v4");

const strRoutes = express.Router();

strRoutes.get("/", (req, res) => {
  res.send("")
})
// Example:
//
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"

// function filterDatabase(query, database) {
//   return database.filter((doc) => {
//     for(let key in query) {
//       if (doc[key] !== query[key]) {
//         return false
//       }
//     }
//     return true;
//   })
// }
//
// let query = {
//   color: "black",
//   species: "howler"
// }

let filterDatabase = function(endpoint, query) {
  let url = endpoint + "?";
  for (let key in query) {
    url += `${key}=${query[key]}&`;
  }
  return url.slice(0, -1);
}

module.exports = filterDatabase;
