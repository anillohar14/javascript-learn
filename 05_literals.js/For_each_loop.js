const arr1 = [1, 2, 3, ,4, 5, 6, 7, 8, 9, 10]
const newarr1= arr1.forEach( (num) => {num > 4} )
// console.log(newarr1);

// the output will be undefined because .foreach loop is not capable to return the data

const arr2 = [1, 2, 3, ,4, 5, 6, 7, 8, 9, 10]
let newarr2 = arr2.filter( (num) => num > 4 ) // In this line the object was not used so js assumed it and this is known as implesite method 
// console.log(newarr2);

 newarr2 = arr2.filter( (num) => {
    return num > 4 // In this line we have to return manually and this is known as deplisite method
 } )

//  console.log(newarr2);

 let ans = []
 const arr3 = [1, 2, 3, ,4, 5, 6, 7, 8, 9, 10]
arr3.forEach( (num) => {
    if (num > 4) {
        ans.push(num)  
    }
} )

// console.log(`Printing using for each loop ${ans}`);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter(  (bk) =>bk.genre === "History" )
//   console.log(userbook);

  userbook = books.filter( (bk) => {
    return bk.publish >= 2000
  } )
//   console.log(userbook);

  userbook = books.filter( (bk) => {
    return bk.genre === 'Science' && bk.publish >= 1990
  } )
//   console.log(userbook);

//   map

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newarr4 = arr4.map( (num) => {
    return num + 10
} )
  
// console.log(newarr4)

// chaining
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newarr5 = arr5.map( (num) => num * 10 ) 
                  .map( (num) => num + 1 )

// console.log(newarr5);

// .reduce 

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newarr6 = arr6.reduce((acc,item) => acc+item,0);
// console.log(newarr6);

let arr7 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newarr7 = arr7.reduce((acc,item) => {
    return acc + item
},0)

