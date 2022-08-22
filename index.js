const array = [1, 2, 3, 4, 5, 6];

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + sum(array);
  }
}

console.log(sum(array)); // return 21
