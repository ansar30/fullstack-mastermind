//  * Example:
//  *   Input:  nums = [2, 7, 11, 15], target = 9
//  *   Output: [0, 1]   (nums[0] + nums[1] = 2 + 7 = 9)
//  */

// function sumArrayCheck(nums, target) {

//     for (let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 console.log("I'm inn ==>",i, j)
//                 return [i, j];
//             }
//         }
//     }
// }
// let nums = [2, 71, 11, 15, 7], target = 9;
// const aa = sumArrayCheck(nums, target);
// console.log(aa);


// function sumArrayCheck(nums, target) {

//     const seenData = new Map();
//     console.log(nums, "Checking nums")

//     for (let i = 0; i < nums.length; i++) {
//         const complement = nums[i] - target;
//         console.log(complement, "Checking the complement")
//         if (seenData.has(complement)) {
//             return [seenData.get(complement), i]
//         }

//         seenData.set(nums[i], i);
//         console.log(seenData, "Checking seen data")
//     }

// }

// let nums = [2, 7, 11, 15, 7], target = 9;
// const aa = sumArrayCheck(nums, target);
// console.log(aa);


// function twoPointer (nums, target) {
//     let right = nums.length - 1;
//     let left = 0;

//     while(left < right) {
//         const sumOfNumber = nums[left] + nums[right];
//         if (sumOfNumber === target) {
//             return [nums[left], nums[right]]
//         } else if(sumOfNumber < target) {
//             left ++;
//         } else {
//             right --;
//         }
//     }

// }


// let nums = [1,2,3,4,5,6,7], target = 9;
// const aa = twoPointer(nums, target);
// console.log(aa);


function profitFinder(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(const price of prices) {
        if (minPrice > price) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    console.log(maxProfit, "===============>")
    return maxProfit;

}

profitFinder([7, 1, 5, 3, 6, 4, 7, 10]);