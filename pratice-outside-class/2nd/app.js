//get random numbers
var Numbers = [];
for (i = 0; i < 10; i++) {
	Numbers.push(parseInt(Math.random() * 100));
}
console.log("random numbers: ");
console.log(Numbers);

///////////logic sort numbers largest to lowest//////////////////
var tmp = [];
for (i = 0; i < Numbers.length; i++) {
	for (j = 0; j < Numbers.length; j++) {
		if (Numbers[j] < Numbers[j+1]) {
		 tmp = Numbers[j];
    //  console.log(tmp);
    //  console.log("")

		 Numbers[j] = Numbers[j + 1];
    //  console.log(Numbers[j]);
    //  console.log("")

		 Numbers[j + 1] = tmp;
    //  console.log(Numbers[j + 1]);
    //  console.log(tmp);
    //  console.log("")
		}
	}
}
console.log("After Sorting:");
console.log(Numbers);

////////// get 3 largest numbers//////////////
var input = Numbers.slice(0, 3)
console.log("get 3 largest numbers: ")
console.log( input)
