// 2 function execution context

var name = "John";

function first() {
  var a = "Hello";
  second();
  var x = a + name;
}

function second() {
  var b = "Hi";
  third();
  var z = b + name;
}

function third() {
  var c = "Hey";
  var y = c + name;
}

first();
console.log("test");
