// premitive type and oject type
// pass by value and pass by refrence
/*
  Data type
    premitive type:- single value  :- number , string , boolean , undefined  (pass by value)
    object type:-  collection of property and its value : object, array, function  (pass by refrence)
*/

var one = 1;
var isMarried = true;
var myName = "sarang jain";

var myinfo = {
  one: 1,
  age: 32,
  address: "pune",
};

var two = one;

console.log(one);
console.log(two);

one = one + 1;
two = two + 5;

console.log(one);
console.log(two);

var yourInfo = myinfo;

console.log(myinfo);
console.log(yourInfo);

myinfo.one = 2;

console.log(myinfo);
console.log(yourInfo);

myinfo.age = 50;

console.log(myinfo);
console.log(yourInfo);

var thirdInfo = yourInfo;

thirdInfo.myName = "Amit";

console.log(myinfo);
console.log(yourInfo);
console.log(thirdInfo);
