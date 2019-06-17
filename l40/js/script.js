var string = "Hello";
string += " World";
// string = string + " World";
console.log(string + "!");

// *** If statement (all false)
if ( false || null || undefined || "" || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log("All false");
}

// *** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}






// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined")
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undfined");
// }
// else {
//     console.log("x has been defined");
// }


// var x ="Hello World";

// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message = " + message);
//     b();
// }

// function b () {
//     console.log("b: message = " + message);
// }

// a();
