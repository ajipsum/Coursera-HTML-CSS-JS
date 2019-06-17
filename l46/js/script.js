// Functions are First-Class Data Type
// Functions ARE Objects
function multiply(x, y) {
    return x * y
}

console.log(multiply(3, 5))
multiply.version = "v.1.0.0"
console.log(multiply)
console.log(multiply.toString)
console.log(multiply.version)

console.log("---------")

// Function factory
function makeMutiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x
    }
    return myFunc
}

var multiplyby3 = makeMutiplier(3)
console.log(multiplyby3(10))
var doubleAll = makeMutiplier(2)
console.log(doubleAll(100))

console.log("---------")

// Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x)
}

var result = doOperationOn(5, multiplyby3)
console.log(result)
result = doOperationOn(100, doubleAll)
console.log(result)

console.log("---------")
