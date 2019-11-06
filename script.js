
//
//
//
//
//
//
// //                               // COLOR FLASHER
// //
// // Grab the Header with h1
// var header = document.querySelector("h1")
//
// // Interface with the style.
// header.style.color = 'red'
//
// // Random Color Function: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
// function getRandomColor(){
//   var letters = "0123456789ABCDEF";
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random()*16)];
//   }
//   return color
// }
//
// // Simple function for clarity
// function changeHeaderColor(){
//   colorInput = getRandomColor()
//   header.style.color = colorInput;
// }
//
// // Now perform the action over intervals (milliseocnds):
// setInterval("changeHeaderColor()",1500);


//                           CONVERSION TOOL
//
// const lbs = prompt("how many lbs?");
// const kg = lbs *0.454
// alert(kg + " kg");
// console.log("conversion complete");



//                             WHILE LOOPS

// EXAMPLE 1:
// var num = 1;
//
// while (num < 11) {
//   if (num%2 === 0) {
//     console.log(num);
//   }
//   num = num+1;
// }

// EXAMPLE 2:
// var x = 0;
//
// while (x < 5) {
//     console.log("hello");
//     x++
// }

// EXAMPLE 3:
// var num = 1;
//
// while (num<25) {
//   if (num%2 !== 0) {
//     console.log(num);
//   }
//   num++
// }



//                            FOR LOOPS

// EXAMPLE 1:
// for (var i = 0; i < 5; i++) {
//   console.log("Number is "+i);
// }

// EXAMPLE 2:
// for (var i = 0; i < 7; i++) {
//   console.log("hello");
// }

// EXAMPLE 3:
// var word = "ABCDEFGHIJK"
//
// for (var i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// EXAMPLE 4:
// for (var i = 0; i < 25; i++) {
//   if (i%2 !==0) {
//     console.log(i);
//   }
// }




//
//                         FUNCTIONS
//
// sudo example:
// function name(param1, param2) {
//   code to execute
// }
// // EXECUTE
// name()
// // RETURNS OUTPUT
// hi mundo!
// // CALL
// name
// // RETURNS
// ƒ name() {
//   code to execute;
// }
//
// // EXAMPLE 1:
// function hello() {
//   console.log("hi mundo!");
// }
//
// // EXAMPLE 2:
// function helloYou(name) {
//   console.log("Hello " +name);
// }
//
// // EXAMPLE 3:
// function addNum(num1, num2) {
//   console.log(num1+num2);
// }
// // EXECUTE
// console.log(2,3);
// // OUTPUT
// 5
//
// EXAMPLE 4:
// DEFAULT PARAMETERS
// function hiPal(name = "Frankie") {
//   console.log("hello " +name);
// }
// // EXECUTE
// hiPal("josh")
// // OUTPUT
// hello josh
//
// or
//
// // EXECUTE
// hiPal()
// // OUTPUT
// hello Frankie
//
// EXAMPLE 5:
// function formal(name = "sam", title='sir') {
//   console.log(title+" "+name);
// }
//
// // EXECUTE
// formal()
// // OUTPUT
// sir sam
//
// // EXAMPLE 6:
// // RETURN STATEMENTS
// function formal(name = "sam", title='sir') {
//   return title + " " + name;
// }
//
// // CONSOLE I/O
// formal() // I
// "sir sam" // O
//
// var output = formal() // I
// undefined // O
//
// output // I
// "sir sam" // O
//
// "welcome " + formal() // I
// "welcome sir sam" // O
//
// EXAMPLE 7:
// function timesFive(numInput) {
//   // local scope
//   var result = numInput * 5
//   return result
// }
// // CONSOLE I/O
// timesFive(4) // I
// 20 // O
// var answer = timesFive(10) // I
// undefined // O
// answer // I
// 50 // O
//
//
// global scope
// var v = " global v"
// var stuff = " global stuff"
//
// function fun(stuff) {
//   console.log(v);
//   stuff = " reassign stuff inside function"
//   console.log(stuff);
// }
//
// fun()
// console.log(stuff);


//                           // ARRAYS

// // EXAMPLE 1:
//
// // not as an array
// var country1 = "USA"
// var country2 = "Germany"
// var country3 = "China"
//
// // as an array
// var countries = ["USA", "Germany", "China"];
// // one way to use
// console.log(countries[0] + " And " + countries[2]);
//
// // to reassign
// countries[2] = "France";
// console.log(countries);
// // OUTPUTS
// // (3) ["USA", "Germany", "France"]
// // 0: "USA"
// // 1: "Germany"
// // 2: "France"
// // length: 3
// // __proto__: Array(0)
//
// // EXAMPLE 2:
// var mixed = [true, 20, " string "]
//
// // input
// console.log(mixed);
// console.log(mixed[1] - 12 + mixed[2] + !mixed[0]);
// console.log(mixed.length);
//
// // output
// // (3) [true, 20, " string "]
// // 8 string false
// // 3
//
// //  EXAMPLE 3:
// // PUSH AND POP METHODS
//
// // pop = remove
// var myArr = ["one", "two", "three"]
// var lastItem = myArr.pop()
//
// // input
// console.log(lastItem);
// // output
// // three
//
// // input
// console.log(myArr);
// // output
// // (2) ["one", "two"]
//
// // push
// myArr.push("new_item")
// // input
// console.log(myArr);
// // output
// // 3) ["one", "two", "new_item"]
//
// // return last item
// console.log(myArr[myArr.length -1]);
//
// // NESTED ARRAYS....inception?
// var matrix = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(matrix);
// console.log(matrix.length);
//
// // EXAMPLE 4:
// // looping arrays
// var arr = ["A ", "B ", "C "]
// console.log(arr);
//
// // "for loop" array iteration
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// for (letter of arr) {
//   console.log(letter);
//   console.log("hello");
//   alert(letter);
// }
// // forEach method
// arr.forEach(alert);
//
// // iterate while adding a string
// function addAwesome(name) {
//   console.log(name + " rules hardcore!");
// }
// addAwesome("Mildred")
//
// var topics = ["OI ", "Pizza ", "Coding "]
// topics.forEach(addAwesome)



//                       // JAVASCRIPT OBJECTS
//           // NESTED JAVASCRIPT OBJECTS { object inception! }
//
// // var varName = { key1: value, key2: value, key3: value }
//
// // VALUES CAN BE STRINGS, INTEGERS, BOOLEANS, ETC.
// // KEYS MUST BE CALLED AS STRINGS. I.E. "console.log("key1");"
//
//
// var carInfo = { make: "Toyota", year: 1990, model: "Camry" };
//
// console.log(carInfo);
//
// newObject = { a: "hello", b: [1,2,3], c:{inside:['a','b']} };
//
// console.log(newObject["a"]);
//
// // USE COMMA BETWEEN INDEX TO DISPLAY EACH VALUE
// console.log(newObject["b"],[1]);
//
// // TO CALL NESTED VALUES
// console.log(newObject["c"]['inside'][1]);
//
// // TO CHANGE A VALUE - notice carInfo log at top now reads
// // new value
// console.log(carInfo["year"] = 2006);
// console.log(carInfo['year'] += 1);
//
// // TO GRAB ENTIRE OBJECT
// console.dir(carInfo);
//
// // TO ITERATE THROUGH KEY ONLY, WITHOUT VALUES
// // KEY CAN BE CALLED ANYTHING
// for (carKey in carInfo) {
//   console.log(carKey);
//   // grab full array
//   console.log(carInfo[carKey]);
// }
//
//
//
//
//                           // OBJECT METHODS
//
// // A
//
// var myObj1 = {
//   prop: 37,
//   reportProp: function() {
//     return this.prop;
//   }
// };
//
// console.log(myObj.reportProp()); // logs 37
//
// // B
//
// var simple = {
//   prop: "Hello",
//   myMethod: function() {
//     console.log("myMethod was called");
//   }
// }
// console.log(simple);
// console.dir(simple);
//
// // to show what happens within a method
// console.log(simple.myMethod);
// // to actually call method, add ()
// console.log(simple.myMethod());
//
// // C
//
// var myObj2 = { // object
//   name: "josh", // key/value
//   greet: function() { // method
//     console.log("Hello " + this.name)
//   }
// }
//
// console.log(myObj2);
// console.log(myObj2['name']);
// console.log(myObj2.greet);
// console.log(myObj2.greet());




// //                   DOM (DOCUMENT OBJECT MODEL) methods
//
// // // to retrieve DOM of a website
// // // console.dir(document);
//
// // // important document attributes
//
// - document.URL // returns url
//
// - document.body // returns everything in the HTML body
//
// - document.head // returns contents of head
//
// - document.links // returns all links on the page
//
// // methods for grabbing elements from DOM
// - document.getElementById()
// // return element with specific id in tag
//
// - document.getElementsByClassName()
// // return element with specific className in tag
//
// - document.getElementsByTagName()
//
// - document.querySelector()
// // returns first object matching CSS style selector
//
// - document.querySelectorAll()
// // returns all objects matching CSS style selector
//
// - .getAttribute
// // gets the attribute of a tag
// // I.E. ~ document.querySelector("a").getAttribute("href")
//
// - .setAttribute
// // changes the value of a tag attribute
// var special = document.querySelector("#special")
// // undefined
// special
// // <h4 id=​"special">​…​</h4>​
// var specialA = special.querySelector("a")
// // undefined
// specialA
// // <a href=​"https:​/​/​www.facebook.com">​FACEBOOK LINK​</a>​
// specialA.getAttribute("href")
// // "https://www.facebook.com"
// specialA.setAttribute("href", "https://www.google.com")
//
// - .textContent
// // retrieve contents of querySelector.
// // I.E. ~ document.querySelector("p").textContent
//
// - .innerHTML
// // pass in html tags
// // I.E. ~  document.querySelector("p").innerHTML = "<strong>I'm Bold</strong>";
//
// // EXAMPLE:
//
// // to change the color of an <h4>tag<h4>
// var myHeader = document.querySelector("h4")
// console.log(myHeader.style.color = "black");
//
// // to change the text in a tag
// var newText = document.querySelector("h4")
// console.log(newText.textContent = "( BOTH .JS FILES ARE LINKED TO NOTES.HTML )");



//                           // EVENT LISTENERS
//
// // BASIC EXAMPLE:
// var head = document.querySelector("a");
// head.addEventListener("click", changeColor);
//
// // SELECTORS TO SPECIFIED h1 TAGS
// var headOne = document.querySelector("#one")
// var headTwo = document.querySelector("#two")
// var headThree = document.querySelector("#three")
//
// //  HOVER EVENT
// headOne.addEventListener('mouseover', function() {
//   headOne.textContent = "Mouse currently hovering";
//   headOne.style.color = "red"
// })
// // UN-HOVER
// headOne.addEventListener("mouseout", function() {
//   headOne.textContent = "HOVER OVER ME";
//   headOne.style.color = "black";
// })
//
// // ON CLICK
// headTwo.addEventListener("click", function() {
//   headTwo.textContent = "Clicked upon!";
//   headTwo.style.color = "lightblue";
// })
//
// // ON DOUBLE CLICK
// headThree.addEventListener("dblclick", function() {
//   headThree.textContent = "I was clicked upon twice!"
//   headThree.style.color = "darkgreen"
// })
//





//                       EXERCIZE 1 loops:
//
//                    secret console message
//
// var firstname = prompt("first name?")
// var lastname = prompt("last name?")
// var whatage = prompt("age?")
// var whatheight = prompt("height in cm")
// var whatpet = prompt("pet?")
// alert("thanks for the info")
//
// var name = null;
// var age = null;
// var height = null;
// var pet = null;
//
// if (firstname[0] === lastname[0]) {
//   name = true;
// } else {
//   name = false;
// }
//
// if (whatage > 20 && whatage < 30) {
//   age = true;
// } else {
//   age = false;
// }
//
// if (whatheight >= 165) {
//   height = true;
// } else {
//   height = false;
// }
//
// if (whatpet[whatpet.length-1] === "y") {
//   pet = true;
// } else {
//   pet = false;
// }
//
// if (name && age && height && pet) {
//   console.log("welcome spy!");
// } else {
//   console.log("move along, nothing to see here");
// }





//                      EXERCIZE 2 functions:
//                 check out codingbat.com for more
//
//  // A:
// function sleepIn(weekday, vacation) {
//   return (!weekday || vacation);
// }
//
//  // B:
// function monkeyTrouble(smileA, smileB) {
//   return (smileA && smileB) || (!smileA && !smileB)
// }
//
//  // C:
//  function stringTimes(str, n) {
//    var returnStr = "";
//    var i = 0;
//    while (i<n) {
//      returnStr += str
//      i++
//    }
//    return returnStr
//  }
// // CONSOLE I/O
// stringTimes("suckit sally ", 4) // I
// "suckit sally suckit sally suckit sally suckit sally " // O
//
// // D:
// function luckySum(a, b, c) {
//   if (a == 13) {
//     return 0
//   }
//   if (b == 13) {
//     return a
//   }
//   if (c == 13) {
//     return a + b
//   }
//   return a + b + c
// }
// // CONSOLE I/O
// luckySum(2,4,13) // I
// 6 // O
//
// // D-2:                  using else if
// function luckySum(a, b, c) {
//   if (a === 13) {
//     return 0
//   } else if (b === 13) {
//     return a
//   } else if (c === 13) {
//     return a + b
//   } else {
//     return a + b + c
//   }
// }
//
//  // E:
// function caught_speeding(speed, is_birthday) {
//   if (is_birthday) {
//     speed -= 5;
//   }
//   if (speed <=60) {
//     return 0;
//   }
//   if (60 < speed <=80) {
//     return 1;
//   }
//   return 2;
// }
//
// // F:
// function makeBricks(small, big, goal) {
//   return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal;
// }
// // CONSOLE I/O
// console.log( makeBricks(3, 2, 8) ); // I
// true // O
// makeBricks(3, 2, 18) // I
// false // O





//                           // EXERCIZE 3:
//
// // ADD-REMOVE NAMES IN AN ARRAY BY PROMPT
//
//
// var roster = []
//
// function addNew() {
//   var newName = prompt("What name would you like to add?")
//   roster.push(newName)
// }
//
// function remove() {
//   var remName = prompt("Who would you like removed")
//   var index = roster.indexOf(remName);
//   roster.splice(index, 1)
// }
//
// function display() {
//   console.log(roster);
// }
//
// var start = prompt("Would you like to start the roster web app? y/n")
//
// var request = "empty";
//
// if (start === 'y') {
//   while (request !== "quit") {
//     request = prompt("Please select an action: add, remove, display or quit.")
//       if (request === 'add') {
//         addNew()
//       } else if (request === 'display') {
//         display();
//       } else if (request === 'remove') {
//         remove();
//       } else {
//         alert("Not Recognized")
//         request = "quit"
//       }
//   }
// }
//
// alert("Thank you for using this app, please refresh to start over")



//                       // EXERCIZE 4 object methods
//
//
//
// var employee = {
//   name: "j com",
//   job: "hitman",
//   age: 51,
//   nameLength: function() {
//     console.log(this.name.length);
//   }
// }
// console.log(employee.nameLength());
// // show keys and values for object
// // alert()
//
// var employee2 = {
//   name: "j com",
//   job: "hitman",
//   age: 51,
//   report: function() {
//     alert(
//       "Name is " +
//       this.name +
//       ", Job is: " +
//       this.job +
//       ", Age is: " +
//       this.age
//     );
//     console.log(this.report());
//   }
// }
// console.log(employee2.report());
//
// // to show just one segment of a string
// var employee3 = {
//   name: "j com",
//   job: "hitman",
//   age: 51,
//   lastName: function() {
//     console.log(this.name.split(" ")[1]);
//   }
// }
// console.log(employee3.lastName());

//
