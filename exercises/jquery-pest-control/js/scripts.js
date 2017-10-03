$("#goombabutton").click(function() {
	var goombaNum = $("#goomba-amount").val();
	var goombaTotal = (goombaNum * 5);
	$("#goombaEntry").append(goombaTotal);
})


$("#bobbutton").click(function() {
	var bobNum = $("#bob-omb-amount").val();
	var bobTotal = (bobNum * 7);
	$("#bobEntry").append(bobTotal);
})

$("#cheepbutton").click(function() {
	var cheepNum = $("#cheep-cheep-amount").val();
	var cheepTotal = (cheepNum * 11);
	$("#cheepEntry").append(cheepTotal);
})

$("#finalhaul").click(function() {
	$("#finalhaul").remove(totalTotal);
	var cheepNum = $("#cheep-cheep-amount").val();
	var cheepTotal = (cheepNum * 11);
	var bobNum = $("#bob-omb-amount").val();
	var bobTotal = (bobNum * 7);
	var goombaNum = $("#goomba-amount").val();
	var goombaTotal = (goombaNum * 5);
	var totalTotal = (cheepTotal + bobTotal + goombaTotal);
	$("#total-total").append("Total price is: " + totalTotal);
})


//sounds audio when you clock on id
var sounds = $("#coinsound")[0];

$("#cheepbutton, #bobbutton, #goombabutton").click(function() {
	sounds.play();
});
//sounds of Final Price
var sounds2 = $("#pipedown")[0];
$("#finalhaul").click(function() {
	sounds2.play();
})

//click toggleClass daytime and night time
$("#nightorday").click(function() {
	$("button").toggleClass("darkbutton");
	$("h1").toggleClass("darktext");
	$("input").toggleClass("darkinput");
	$("*").toggleClass("darkbody");
	$("html").toggleClass("darkbackground");
	$("footer").toggleClass("bluebackground")
})
