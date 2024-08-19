const express = require("express");
app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
const ejs = require("ejs");
app.set('view engine', 'ejs')
app.use(express.static('public'));
options={
    weekday: "long"
}
var today = new Date()
var weekday = today.toLocaleDateString("en-US", options)

var list = ["eat food", "cook food", "playing"];

app.get("/", (req, res)=>{
    res.render('index.ejs', {paragraph : weekday, array : list});
})

app.post("/", (req, res)=>{
    list.push(req.body.newitem);
    res.redirect('/');
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000...")
})