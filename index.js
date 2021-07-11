// 1 Object
// collection of its property and its value

var myInfoObj = {
  name: "sarang jain",
  age: 33,
  isMariied: true,
  friends: ["ankesh", "rajesh", "sohan"],
  supportFunction: function () {
    console.log("yes they support function");
  },
  address: { flatNo: 201, street: "MG road", pin: 400101 },
};

console.log(myInfoObj);

console.log(myInfoObj.address);
console.log(myInfoObj.age);
console.log(myInfoObj.isMariied);
console.log(myInfoObj.supportFunction);
console.log(myInfoObj.supportFunction());
