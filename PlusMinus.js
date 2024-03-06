// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  let base = arr.length;
  console.log((pos / base).toFixed(6));
  console.log((neg / base).toFixed(6));
  console.log((zero / base).toFixed(6));
}
