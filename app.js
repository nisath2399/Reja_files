console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//Mongodb call
const db = require("./server").db();

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
    console.log("User entered /created-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.get("/", (req, res) => {
    console.log("User entered /");
    db.collection("plans").find()
        .toArray((err, data) => {
        if (err) {
            console.log( err);
            res.end("Something went wrong");
        } else{
            console.log(data);
            res.render("reja", {items: data});
        }   }
    )
});
app.get("/train", (req, res) => {
    console.log("User entered /");
    res.render("train")
});
module.exports = app;