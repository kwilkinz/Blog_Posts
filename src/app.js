const express = require("express");
// express app 
const app = express();

// register view engine (template engine)
app.set("view engine", "ejs");
app.set("views", "src/views") 

// listen for requests 
app.listen(5000);


// GET API Handlers 
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get("/blogs/create", (req, res) => {
    res.render("create");
});


// 404 - middleware func.
app.use((req, res) => {
    res.status(404).render("404")
});


module.exports = app;