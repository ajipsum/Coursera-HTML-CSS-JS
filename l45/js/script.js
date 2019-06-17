// // Object creation
// var company = new Object()
// company.name = "Facebook"
// company.ceo = new Object()
// company.ceo.firstName = "Mark"
// company.ceo.favColor = "Blue"


// console.log(company)
// console.log("Company CEO name is: " + company.ceo.firstName)

// console.log(company["name"])

// company.$stock = 110
// console.log("Stock price is: " + company.$stock)

// Better way: Object literal
var facebook = {
    name : "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "Blue"
    },
    $stock: 110
}

console.log(facebook.ceo.firstName)
