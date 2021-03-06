let database = [
  {a:0, b:0, c:0, d:6},
  {a:0, b:0, c:0, d:3},
  {a:2, b:5, c:2, d:2},
  {a:0, b:1, c:0, d:3},
  {a:1, b:0, c:2, d:1},
  {a:1, b:3, c:3, d:3},

]

function filterDatabase(query, database) {
  // going through each objest in the data base
    //we are checking whether each key/valie pair in the object matches a key/value in the query obj
    return database.filter((doc) => {
      for(let key in query) {
        if(doc[key] !== query[key]){
        return false;
        }
      }
      return true;
    })
}

let query = {
  a:0
}

console.log(filterDatabase(query, database));
