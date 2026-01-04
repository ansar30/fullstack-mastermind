// function hashMap(nums) {
//   const map = new Map();

//   for (let num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   return map;
// }
// const num = ['ansar', 'san', 'san', 1, 3];
// const map = new Map();
// for (let i = 0; i < num.length; i++) {
//   map.set(num[i], i);
// }
// console.log(map);

// console.log(map.get('ansar'));


function anagram (arr) {
    const map = new Map();
    // const array = [];
    for (const value of arr){
        const sorted = value.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted, []);
        }
        map.get(sorted).push(value);
        // array.push(sorted);
    }
    return map;

}

console.log(anagram(['ansar','rasna', 'ate', 'eat', 'tea', 'two']));