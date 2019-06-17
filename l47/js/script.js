
// Passing value by reference (Objects) vs.
// Passing value by value (primitive data types)

// Copy by Reference vs. by Value

// var a = {
//     x: 7
// }
// var b = a
// console.log(a.x)
// b.x = 6
// console.log(a.x)

// console.log("---")

// // Copy by Value
// console.log("--- Copy by Value")
// var a = 7
// var b = a
// console.log("a: " + a)
// console.log("b: " + b)

// b = 5
// console.log("a: " + a)
// console.log("b: " + b)

// console.log("--- Copy by Reference")

// var a = {x: 7}
// var b = a
// console.log(a)
// console.log(b)

// b.x = 5
// console.log("\t after b.x update: ")
// console.log(a)
// console.log(b)

// // Pass by Reference vs Value
// console.log("--- Pass by Reference vs Value")
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...")
//     console.log("before: ")
//     console.log(primValue)

//     primValue = 5
//     console.log("after:")
//     console.log(primValue)
// }

// var value = 7
// changePrimitive(value) // primValue = value
// console.log("after changePrimitive, orig value:")
// console.log(value)

// Pass by Reference vs Value
console.log("--- Pass by Reference vs Value")
function changePrimitive(objValue) {
    console.log("in changePrimitive...")
    console.log("before: ")
    console.log(objValue)

    objValue.x = 5
    console.log("after:")
    console.log(objValue)
}

var value = {x: 7}
changePrimitive(value) // objValue = value
console.log("after changePrimitive, orig value:")
console.log(value)
