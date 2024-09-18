/* 
    variable : container 
    let (reassign , redecale nai kar sakte ho),
    var (redecalre , reassign), 
    const(declare and ressign both are not possible )


    Data : collection of raw facts and figure   
    Data type : 
    1 : Primitive :  
        Number  : 12(int) , 12.2(float)
        String : 'character' , "string"
        Boolean : true and false
        null :  empty / khali
        undefined : aap ne sife decalre
        symbol : Unique
        bigInt : 

    2 : non primitive / Reference : 
         array , object , function   
*/

// let num1 = BigInt(12345678901234567890)
let num1 = 1234567890123456n;

// == value , === value , dataype

var array = [1, 2, 3, 4, "htadf", "ucfwe", 21.3213, undefined];

var obj = {
  key: "value",
  name: "Arti",
  age: 23,
};

var a = function arti() {
  console.log("hello from function");
};

console.log(arti());
