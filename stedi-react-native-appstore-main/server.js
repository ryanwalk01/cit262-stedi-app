const express = require("express");
const app = express();

app.get('/ryan', (req, res) => {
    res.send("Hello Ryan.")
})

app.get('/',(req, res) => {
    res.send("Welcome to Ryan's backend API.")
})

app.listen(3000, ()=> {
    console.log("Listening");
});