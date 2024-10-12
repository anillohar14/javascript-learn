// const programing = ["cpp","java","python","ruby"]
// programing.forEach(function(item) {
//     console.log(item)
// })

const programing = ["cpp","java","python","ruby"]
programing.forEach((item)=>{
    // console.log(item)
})

// In for each loop we need to only remove the name of the function.
// We can also give the referance of the fuction

function printme(val) {
    console.log(val);
}

// programing.forEach(printme);

// lets try this for in array of multiple object

let mycode = [
    {
        name : "anil",
        age : 20
    },
    {
        name : "devansh",
        age : 18
    },
    {
        name : "shakshi",
        age : 15
    }
]

mycode.forEach((item) => {
    console.log(item.age)
})