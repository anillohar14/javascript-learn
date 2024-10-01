let arr = new Array(1, 2, 3, 4, 5);
console.log(`Printing an given array : ${arr}`)

// Printing an individual from array
console.log("printing a particular element : ",arr[1] );

// Inserting an element in an array
arr.push(6);
console.log(`Inserting an elment in an array : ${arr}`);

// Deleting an element from an array
arr.pop();
console.log(`Deleting an element from an array : ${arr}`);

console.log();
console.log();

// BY using shift and unshift

arr.unshift(0)
console.log(`Using unshift : ${arr}`);

arr.shift()
console.log(`Using shift : ${arr}`);
console.log();
console.log();

// Finding an element with predefine function and by index number

console.log(`Finding element by includes function : ${arr.includes(4)}`);
console.log(`Finding element by index number : ${arr.indexOf(3)}`);
console.log();
console.log();


// Merging two array by using join function

const newArr = arr.join()
console.log(`Printing Before joining of an array : ${arr}`)
console.log(`Printing After joining of an array : ${newArr}`)

console.log();
console.log();

// learned slice and splice

console.log(`Printing Original array : ${arr}`);
let new_arr_1 = arr.splice(1 , 3);
console.log(`Printing "SLICED" array : ${new_arr_1}`);

console.log();

console.log(`Printing Original array : ${arr}`);
let new_arr_2 = arr.splice(1 , 3);
console.log(`Printing "SPLICED" array : ${new_arr_2}`);

console.log()
