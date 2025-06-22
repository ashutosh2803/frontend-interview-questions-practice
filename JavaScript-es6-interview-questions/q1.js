// Closures + Scope + let/const + Arrow Functions
// Interview Q:

// What is a closure in JavaScript? How does it behave differently when using var vs let?

const counterFactory = () => {
    let count = 0;
    return () => ++count;
}

const counter = counterFactory()
console.log(counter());
console.log(counter());

// Concepts used:

// Closure (counter retains access to count)

// let ensures block scope

// Arrow function (this not bound here, but shows syntax usage)