/*
  do- while : 

  do{
    // statements
    flow
  }while(cond)

  1 : initilization
  2 : condition
  3 : flow

*/

// var a = 5;

// do {
//   console.log(a);
//   a++;
// } while (a < 10);

/*
step 1 : a = 5
step 2 : 5
step 3 : a++ = 6

loop 1 : 
step 4 : a < 10 => 6 < 10 true
step 2 : a = > 6
step 3 : a++ => a = 7

loop 2 : 
step 4 : a < 10 => 7< 10 true
step 2 : a => 7 => 7
step 3 : a++ => 8

loop 3 : 
step 4 : a < 10 => 8< 10 true
step 2 : a => 8 => 8
step 3 : a++ => 9

loop 4 : 
step 4 : a < 10 => 9< 10 true
step 2 : a => 9 => 9
step 3 : a++ => 10

loop 5 : 
step 4 : a < 10 => 10 < 10 false
*/

var b = 10;

do {
  if (b % 2 == 0) {
    continue;
  }
  console.log(b);
  b++;
} while (b <= 10);

/*
step 1 : b =  10
step 2 :  
      step 1 : b%2 == 0 true 
      step 2 : 10
step 3 : b++ => 11
loop 1 :
step 4 :  b<=10     => 11 <= 10 false
*/

var b = 1;

do {
  console.log(b);
  if (b % 2 == 0) {
    continue;
  }
  console.log(b);
  b++;
} while (b <= 10);

/*
step 1 :  b = 1
step 2 : 
    step 1 : 1
    step 2 : b%2==0 false
    step 3 : 1 
step 3 : b++ => 2

loop 1 : 
step 4: true 
step 2 : 
    step 1 : 2
    step 2 : b%2==0 true
    step 3 : continue : cuurent skip 
    
loop 2 : 
step 4: true 
step 2 : 
    step 1 : 2
    step 2 : b%2==0 true
    step 3 : continue : cuurent skip    
    
    ... infinity


*/
