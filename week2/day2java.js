// var decisionObject = {
//   wannaPlay: "Do you want to play";
//   decision1: "decision 1",
//   condDec1: "Conditional decision 1",
//   doesntSaveFamily: {
//     noParents: "do you save parents",
//     noSister: "do you save sister",
//   },
//   }
//
//   } while (true);ecision1
// }
//
// var playGame = confirm("Do you wna to play");
//   confirm((decisionObject.wannaPlay);

// to test some of this stuff you can use node in terminal
//simply type node or you can use the console in chrome

//operators
//=== strict equality
// == loose equality
// && logical to mean "and"
// || logical to mean "or"

//var myString = "my string" myString.toUpperCase(); prints "MY STRING"
//toLowerCase would make a sting lower case

//mysting.split(" "); this will create an array ['my', 'string']
// inside the () is where you tell the system how to split: ex (",")

//to create an array var myArr = [1, 2334, "boat"]
//myArr.length will tell us the length of the array
//myArr.push("new value") will add a new value to the arrat
//myArr.pop will show first value in array
//myArr will just show all values in array
//myArr[1] will print the 2nd value of the array
//myArr.shift() this will remove the FIRST value of the array
//myArr.splice  this will
//myArr.join("");  this will join all array together in one long string


//functions:

//function sayHello(){   this is where we declare the functions
//console.log("hello");   this is where we tell it to print to console
//return "hello";        this is where we tell it to retain
//}                       end the functions
//sayHello();             call the function to run (or pass value)
//this will return the value "hello" and hello in the console
//var helloText = sayHello();  here we can assign another variable the answer
//of the return value

//we could also use
//function sayHello(name, adj){
//console.log("hello" + name + "they are" + adj);   this is where we tell it to print to console
//return hello" + name + "they are" + adj;
//}                       end the functions
//sayHello("Dustin", "great");             call the function to run (or pass value)


//function charCount(sentence){
//console.log(sentence.length);
//return sentence.length;
//}
//charCount("This is a long sentence");
// var mySentArr = charCount   this will turn the charCount into an array
//or var mySentArr = charCount.split(" ");

//function wordCount(words){
//return words.split(" ").length;
//if we cant to see it console.log(words.split(" ").length);
//}
//wordCount ("Can you count the characters here")
//This will make an array from the sentence and return the length of the array
//if you split by ("") this will take each individual letter and space in the sentence

//function sum(x,y) {
//console.log (x + y);
//return x + y;
//}
//sum (2,3)  this is where we pass the values or CALL the function

//var mySum = sum(4,5)  this creates a new variable from the function

//function sum(x,y) {
//console.log(arguements);  this logs the [2,3] to console
//if (typeof x === "number" && typeof y ==="number") {
//return x + y;
//else {
//return "sorry, must be a number";
//}
// }
//console.log (x + y);
//return x + y;
//}
//sum (2,3)

//SIMPLE FOR LOOP:
//for (var i = 0; i < 10; i++) {
//console.log("Hello" + i)
//}

//function sum() {
//var args = [].slice.call(arguments);  this converts arguments to an array [22,33]
//console.log(args);  this will log that array to console
//var total = 0;  we are setting total to 0 to use with for loop
//for(var i = 0; i < args.length; i++){   loop with var i the length of array (twice -  22,33)
//total = total + args[i];  here we take the total of two inside the array
//}
//console.log(total);
//return total;
//}
//sum (22,33)
//This would only loop 2 times and return the total 55

//var myArr = ["random", "things", "go"];
//for (var i = 0; i < myArr.length; i ++) {
//myArr[i] = myArr[i] + "bear";
// this will just print out "go bear"...but the entire array was created
//}

//var myArr = [1,2,3];
//myArr.forEach(function(element, index, arr){  we are passing a function to the forEach element
//console.log("element",element);
//console.log("index", index);
//console.log("array", arr);
//});
//this passes a new value into this loop and will only run for the length of it
//and will log the first time 1,2,3
//second time 0,1,2
//third time [1,2,3]
//+++This function(element, index, arr) is ONLY used with ARRAYS+++
//BIG PICTURE here is when you grab data from a feed you can loop through to pick
//out the individual pieces you want to then move them or style them
