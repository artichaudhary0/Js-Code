/*

Number  : int float

bigInt : store larger int number 

undefined : only declare , assignment not done

symbol : Unique id,

null : Empty 

string : "collection of charater" 'Arti chaudhary'

boolean : true false


Operator : 
It is symbol which is used to perform mathematical and logical operation.

Operand : These are the variable or numric value which is used for evaluating expression.

a+b =>
Operator +
Operands => a, b
expression => a+b

Unary binary ternary.

Unary =>
Increment(++)
    pre ++a
        step 1 : increment
        step 2 : use 
    post a++
        step 1 : use if ava
        step 2 : increment
Decrement(--) 
    pre --a
        step 1 : decrement
        step 2 : use     
    post a--
        step 1 : use if ava
        step 2 : decrement    

Binary Operator : 
Arithmetic operators (+,-,*,/,%)
Assignment operatorsv (= , +=,-=,/=,%=,*=)
Comparison operators (<,> ,<= >=, == , !=)
Logical operators (&& , || , !)

&& (AND)
A B C(A&&B)
1 0 0
0 1 0
0 0 0
1 1 1

|| (OR)
A B C(A||B)
1 0 1
0 1 1
0 0 0
1 1 1

! (NOT)
1 => 0
0 => 1

Conversion with console.log with InnerHTML        
*/



var a = 10 
var b = 20

console.log("Arithematic operator : ")
//2^6 => 2*2*2*2*2*2 => 2**6

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(2 ** 3) // 2^3

console.log("Assignment operator : ")

// = assignment

var c = 10  // assignmemnt
var d = 20

// var c = c + d // 10 + 20 => 30
 c += d // c = c + d 10 + 20 => 30
 c -= d // c = c - d => 30 - 20 => 10
 c *= d // c = c * d => 10 * 20 => 200 
 c /= d // c = c / d => 200 / 20 => 10  
 c %= d // c = c % d => 10 % 20 => 10
 c **= d // c = c ** d => 10 ^ 20

console.log(c)

console.log("========Comparison operators============")

/* 
> => greater then
< =>  less then
>= => greater then OR equal to => > || ==
<= => less then OR equal to => < || ==
==  
===
! = => !(NOT) equal(==) =>  !(equal)

*/
var e = 5
var f = 2 
console.log(e > f) // e > f => 5 > 2 // true
console.log(e < f) // e < f => 5 < 2 // false

console.log( e <= f ) // false || false

console.log( e >= f ) // true || false

var g = 5
var h = '5'
/*
== checks only value. loose equality operator
=== check value and type . strong equality operator
*/

console.log(g === h)

console.log( g !== h) // !(number === string)

console.log(1 && 1)





