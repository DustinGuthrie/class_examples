//javascript!

//comment

//datatypes
// to determine data type use typeof

// primitives
// 1. numbers
console.log(2 + 2);
console.log(2 * 4);

// 2. booleans
// true or false

// 3. strings
// characters in quotes "hello world";
console.log("Hello World");
console.log(typeof 2);
// parseint("1234") will change string to type number 1234
// null undefined

// objects
// 4. objects
// objects are surrounded by {}
// var myObj = {}
//   myObj = {
//     propName: propvalue
//   };
//
// 5. arrays
// arrays are surrounded by []
var myArr = [ 1,2,3,"four",true,{bad:"ass"},function() {return "hello world"}, null, undefined]

// 6. functions
function nameOfFunction() {
  console.log("im a function");

}
// operators
// + - = === == < >
// === checks value and type
// == checks the type
// "15" + 1 will concatinate to 151
if (true) {
  console.log("you are right!")
}
// if statements are always true by default
var myBool=false;
  if myBool{
    console.log("did anything print")
  }
  // here you would not get a response because value is FALSE
  var myBool = false;
  if(myBool) {
    console.log("you win");
  }else if(myBool === false){
    console.log("not right");
  }else {
    console.log("give up");
  }
  // This would print not right
  // if you set the value to null then would print give up

  alert("hi everyone!");
  // this causes a prompt box to appear on your screen
  confirm("are you sure you want to do this?")
  // another prompt box with yes/no
  var wantToDo = confirm("want to do this");
  console.log("want to do this?", wantToDo);
//
var howManyKids = prompt("how many kids");
console.log('how many kids', howManyKids);
