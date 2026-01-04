// function palindrome (arr) {
// let left = 0, right = arr.length - 1;

// while (left < right) {
//     if (arr[left] !== arr[right]) return false;
//     left++;
//     right--;
// }
// return true;
// }

// const palindromeCheck = palindrome([8,1,2,1,8]);
// console.log(palindromeCheck, "Palidrome Checked correctly =====<");

// function twoNumberCheck(arr, target) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i],i);
//   }
//   return []
// }

// const check = twoNumberCheck([1,2,3,4,5], 3);
// console.log(check, "================")


function slidingWindow (arr, k){
  let tempWindow = 0, maxWindow = 0;

  for (let i = 0; i < k; i++) {
    tempWindow = tempWindow + arr[i];
  }
  maxWindow = tempWindow;

  for (let i = k; i<arr.length; i++){
    tempWindow = tempWindow + arr[i] - arr[i - k];
    maxWindow = Math.max(tempWindow, maxWindow);
  }
  console.log(maxWindow);
  return maxWindow;
}

slidingWindow([2,1,2,3,4,5,1], 3);