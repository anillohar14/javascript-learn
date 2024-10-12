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
    // console.log(key ,":-", value);
 }

//  const myobj = {
//     game1 : 'BGMI',
//     game2 : "Temple Run"
//  }
//  for (const [key, value] of myobj) {
//     console.log(key ,":-", value);
//  }

//  There are some other method to iterate the object throw for of loop
//  This method is only use to iterate maps

//  for in loop

const code = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    java : "java"
}

for (const key in code) {
    // console.log(key)
}

for (const key in code) {
//    console.log(code[key])
}

for (const key in code) {
    // console.log(`${key} file name for ${code[key]}`)
 }

// Now lets see can for in loop iterate on array

const name1 = ["anil","devansh","shakshi"]
 for (const key in name1) {
    // console.log(key)
 }
 
 const name2 = ["anil","devansh","shakshi"]
 for (const key in name1) {
    //  console.log(name1[key])
 }