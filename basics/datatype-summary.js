// primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// string
let message="Hello dear";
console.log(message);
// number
const countNumber=10;
console.log(countNumber);
// Boolean
const isActive=true;
console.log(isActive);
// undefined, null;
let undefinedVar;
let nullVar2=null;
console.log(undefinedVar);
console.log(nullVar2);
// Symbol
let id=Symbol("123");
let anotherId=Symbol('123')
console.log(id);
console.log(id===anotherId);

// BigInt

const bigNumber=324234832894230948234n;
console.log(bigNumber);

// Reference (Non Primitive)
// Array, Object, Function

const heros=["Ironman",'Antman','Capton America'];
let userObj={
    "name":"Tony Stark",
    "age":45,
    "emailId":"tonystark@gmail.com"
};

const greeting=function(name){
    return `Hello dear ${name}, welcome to my world!`;
}

console.log(heros[0]);
console.log(userObj["name"]);
console.log(greeting("Spiderman"));

// =================== Memory=====================
// Stack(Primitive), Heap(Non-primitive)

let myName="John wick";
let yourName=myName;
 yourName="Mariam";

 console.log(myName);
 console.log(yourName);

 let myObj={
    "Full Name":"John Wick",
    "Age":50
 };

 console.log(myObj['Full Name']);

 let myObj2=myObj;
 myObj2['Full Name']='Marian';
 console.log(myObj2['Full Name']);
 console.log(myObj['Full Name']);