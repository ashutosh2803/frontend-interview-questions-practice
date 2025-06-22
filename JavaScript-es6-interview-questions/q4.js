// map + filter + reduce + Arrow Functions + Immutability
// Interview Q:

// How would you process an array of user objects to get a list of names of users above age 25?

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 27 },
    { name: "C", age: 30 },
  ];

const filteredUsers = users.filter(user => user.age > 25).map(user => user.name);

console.log(filteredUsers)

// Concepts used:

// filter() for conditional logic

// map() for transformation

// Arrow functions

// Functional, immutable style

