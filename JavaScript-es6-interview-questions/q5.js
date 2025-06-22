// this + call/apply/bind + Arrow Functions Context
// Interview Q:

// How does this behave in arrow functions? What are call, apply, and bind used for?

const user = {
    name: "Ashu",
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
  
  const greetArrow = () => console.log(`Hello, I'm ${this?.name}`);
  
  user.greet(); // works
  greetArrow.call(user); // undefined or error
  user.greet.call({ name: "Rahul" }); // Hello, I'm Rahul

  
//   Concepts used:

// Regular vs arrow functions with this

// .call() to override context