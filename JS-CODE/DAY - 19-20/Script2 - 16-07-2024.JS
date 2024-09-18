// Add an element at last (push)

// let array1 = [10,20,30,40,50,40];
// array1[array1.length] = 1 ;

// for(let i = 0 ; i< array1.length ; i++)
// {
//   console.log(array1[i])
// }


// search element index in an array

// console.log(array1.indexOf(40)) 

// let searchItem = 40 ;
// let index = -1 ; // if element is not present

// for(let i = 0 ; i<array1.length ; i++)
// {
//   if(searchItem==array1[i])
//   {
//     index = i
//     break
//   }
// }


// if(index == -1)
//   console.log("Element is not present")
// else
//   console.log(index)



//   let searchItem = 40 ;
// // let index = -1 ; // if element is not present

// let array2 = [] // empty array

// for(let i = 0 ; i<array1.length ; i++)
// {
//   if(searchItem==array1[i])
//   {
//     array2.push(i)
//   }
// }


// if(array2 == [])
//   console.log("Element is not present")
// else
//   console.log(array2)


// sum of all value in array

// let array1 = [10,20,30,40,50,40];
// let sum = 0

// for(let i = 0 ; i<array1.length ; i++)
// {
//   sum += array1[i]
// }

// console.log(sum)

// add an element at particular location


// let array1 = [10,20,30,40,50];

// let newValue = 60

// let insertIndex = 2

// for(let i = array1.length - 1 ; i>=insertIndex ; i--)
// {
//     array1[i+1] = array1[i] 
// }

//   array1[insertIndex] = newValue

//   console.log(array1)

// merge

// let array1 = [10,20,30,40,50];
// let array2 = [10,20,30,40,50];
// //merge = [10,20,30,40,50,10,20,30,40,50]

// let array3 = []


// for(let i = 0 ; i < array1.length ; i++)
// {
//   array3[i] = array1[i]
// }

// for(let i = 0 ; i < array2.length ; i++)
// {
//   array3[array1.length + i] = array2[i]
// }

// console.log(array3)

// Delete all the occurrence of a specific element in the array.
let array1 = [10,40,20,40,30,40,40,50] ;

let deleteItem = 40 

let newSize = 0 

for(let i = 0 ; i < array1.length ; i++)
{
  if(array1[i] != deleteItem)
  {
    array1[newSize] = array1[i]
    newSize++
  }
}


array1.length = newSize

console.log(array1)


// for(let i = 0 ; i<newSize ; i++)
// {
//   console.log(array1[i])
// }
