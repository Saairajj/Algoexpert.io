let array = [3, 5, -4, 8, 11, 1, -1, 6];
// let array = [2, 3, 6, 9];

let targetSum = 10;

let targetArray = [];


for (let i = 0; i<=array.length - 1; i++) {
  for(let j = i + 1; j<array.length; j++) {
    if(array[i] + array[j] == targetSum) {
      targetArray.push(array[i]);
      targetArray.push(array[j]);
      break;
    }
  }
}

// for (let i = 0; i < array.length - 1 ; i++) {
//   let temp = targetSum - array[i];
//   let j = 0
//   while(j < array.length) {
//     j = i + 1;
//     if(array[j] == temp) {
//       break;
//     }else {
//       j++;
//     } 
//     console.log(i, j+1, temp);
//   }
// }


console.log(targetArray);