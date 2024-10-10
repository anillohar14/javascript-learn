// for of loop

const arr1 = [1, 2, 3, 4, 5]
for (const num of arr1) {
    // console.log(num);
}

const name = "anil";
for (const i of name) {
    // console.log(`${i}`);
}

//  Map

const map = new Map()
map.set ('IN',"India")
map.set ('PAK',"Pakistan")
map.set ('FR',"France")

// console.log(map); 

 for (const [key, value] of map) {
    console.log(key ,":-", value);
 }