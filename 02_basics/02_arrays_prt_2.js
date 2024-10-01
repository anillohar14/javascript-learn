const  arr1 = ["anil", "devansh", "shakshi"]
const arr2 = ["teena", "chaganlal"]

//arr1.push(arr2)
//console.log("pushing : " , arr1);
//console.log();

//const all_members = arr1.concat(arr2)
//console.log(`merging array by using concating function : ${all_members}`);
//console.log();

const all_full_members = [...arr1 , ...arr2]
console.log(`merging array by using spread function : ${all_full_members}`);
console.log();

const arr3 = [1, 2, 3, [4, 5, 6], [7, [8, 9]]]
console.log(`solving nested arrays into single array : ${arr3.flat(Infinity)}`)
console.log();

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name : "hitesh"})) // interesting

const score_1 = 100;
const score_2 = 200;
const score_3 = 300;

console.log(Array.of(score_1, score_2, score_3));
