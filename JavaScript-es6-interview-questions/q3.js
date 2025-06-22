// 🔹 Async/Await + Promises + Error Handling
// Interview Q:

// Explain how async/await simplifies promise-based code. How would you handle errors in both?

const fetchData = async(id) => {
    try{
        // const res = await fetch(`https://api.example.com/users/${id}`)
        // const data = await res.json()
        const res = await fetch(`https://api.example.com/users/${id}`).json() // combined
        console.log(res.data)
    }catch(err){
        console.error("Something went wrong! REASON: ", err.message)
    }
}

fetchData(314);


// Concepts used:

// async/await for readability

// try/catch for error handling

// Promise-returning fetch API