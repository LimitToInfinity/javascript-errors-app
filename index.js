// fetch("http://localhost:3000/errors")
//     .then(parseJSON)
//     .then(displayErrors)
// const errors = [ { name: "yes" }, { name: "no" }, { name: "maybe" } ];

// displayErrors(errors)

// function displayErrors(errors) {
//     console.log( errors.map( error => {
//        return error.name; 
//     )} )
// }

// function parseJSON(response) {
//     return response.json();
// }

// const object = { dogs: [], cats: [] };

// object.plants.map(plant => "yes")

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers({}, 3);

const h1 = document.createElement("h1");
h1.innerText = {name: "yes"}.name;
document.body.append(h1);