import express from "express";
import cors from "cors";
import dotenv from "dotenv";



dotenv.config();

// const is similar to the final Keyword in Java
// app is being used as a variable name here for the imported express.
const app = express();

app.use(cors());
app.use(express.json());


// => is the arrow function syntax introduces in ES6
//used to define compact function expressions
// example (parameters) => { function body }
//Shorter than traditional function syntax

// Example of this: const add (a , b) => a + b; // this would return a + b
app.get("/api/health", (req,res) => {
res.json({ok: true, message: "Server is healthy"})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));