console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

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

app.post("/create-item", (req, res) =>{
    console.log(req.body);
});

app.get('/author', (req, res) => {
    res.render('author', {
        user: user,
        services: [
            {
                icon: "/author/service_icon/Icons_coding.png",
                title: "Web Development",
                text: "Blog, E-Commerce"
            },
            {
                icon: "/author/service_icon/Icons_illustration.png",
                title: "UI/UX Design",
                text: "Mobile App, Website Design"
            },
            {
                icon: "/author/service_icon/Icons_Microphone.png",
                title: "Sound Design",
                text: "Voice Over, Beat Making"
            },
            {
                icon: "/author/service_icon/Icons_game-development.png",
                title: "Game Design",
                text: "Character Design, Props & Objects"
            },
            {
                icon: "/author/service_icon/picture.png",
                title: "Photography",
                text: "Portrait, Product Photography"
            },
            {
                icon: "",
                title: "Advertising",
                text: "Lorem Ipsum Dolor Sit Amet",
                link: "#"
            }
        ]
    });
});


app.get("/", (req, res) => {
    res.render("harid")
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`);
});
 