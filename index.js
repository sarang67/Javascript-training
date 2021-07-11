// 2 scope chain  :-
// function can access its variable , then it will check in its parent then last it will check in its global scope

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
  var z = c + name;
  var name2 = "sonu";

  function fourth() {
    var name = "teenu";
    console.log(name);
    console.log(name2);
    console.log(name3);
  }
  fourth();
}

first();
console.log("test");
