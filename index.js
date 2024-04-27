import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000; // 8080
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/health", (req, res) => {
    res.send("I am healthy");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})