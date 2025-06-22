// Destructuring + Rest/Spread + Default Params
// Interview Q:

// How do you extract specific properties from objects using destructuring? How can rest/spread help in building reusable functions?

const logUser = ({name, age = 25, ...rest}) => {
    console.log(`name: ${name}, city: ${rest.city}`)
    console.log(`age: ${age}`)
    console.log("rest: ", rest)
}

const user = {name: "Ashutosh Kumar", city: "Pune", role: "Developer"}
logUser(user);

// Concepts used:

// Object destructuring

// Default parameters (age = 25)

// Rest operator (...rest)