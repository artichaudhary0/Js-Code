/*
    loops : 
    Type of loop :
    1 : entry loop :
        for while
    2 : exit loop :
        do- while
    
    Requirements : 
    1 : initilization (single shot)
    2 : condition
    3 : flow (increment/ decrement)    
*/

/*
while(cond)
{
    // statements
}
*/

// let i = 0 // istep 1

// while(i<5)   // step 2
// {
//     console.log(`${i}`) // step 3
//     i++ // step 4
// }

/*
step 1 : i = 0

loop 1 : 

step 2 : i < 10 true 
step 3 : console => 0
step 4 : i++ => i+1 => 0+1 => 1

loop 2 : 

step 2 : i < 5  1 < 5 true
step 3 : console => 1
step 4 : i++ => i+1 => 1+1 => 2

loop 3 : 

step 2 : i < 5  2 < 5 true
step 3 : console => 2
step 4 : i++ => i+1 => 2+1 => 3

loop 4 : 

step 2 : i < 5  3 < 5 true
step 3 : console => 3
step 4 : i++ => i+1 => 2+1 => 4

loop 5 : 

step 2 : i < 5  4 < 5 true
step 3 : console => 4
step 4 : i++ => i+1 => 4+1 => 5

loop 5 : 

step 2 : i < 5  5 < 5 false
 */

var a = 1;

while (a < 10) {
  if (a % 2 == 0) {
    console.log(a);
    break;
  } else {
    console.log(a);
  }
  a++;
}
/*
step 1 : a = 1

loop 1 : 

step 2 : a < 10 => 1 <10 true
step 3 : 
    if() => a%2==0 => 1%2== 0 false
step 4 : a +1 => 2

loop 2 : 
step 2 : a < 10 => 2 < 10  true
step 3 :
    step 1 : a%2==0 => 2%2==0 => true
    step 2 : 2 console
    step 3 : break : terminate from loop


*/

console.log(a);
