console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 expressga kirib kevotgan ma`lumotlarni yozamiz
//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code

//3 back-end da view yasimiz va uni clientga jonatamiz
//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
// app.get("/", function(req, res) {
//     // res.end(`<h1 style="background: blue">Hello world</h1>`);
//     res.end("Hello world");
//     });

// app.get("/", function(req, res) {
//     res.end("<h1>Siz sovg`alar bo`limidasiz</h1>");
//     });
app.post("/create-item", (req, res) =>{
    console.log(req.body);
});
app.get("/", function(req, res) {
    res.render("harid")
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`);
});
