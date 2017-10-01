var arr = [1, 3, 4, 10, -10, -20];

function loop(arr) {
  smallNum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
  }
  console.log(smallNum);
}

loop(arr);
