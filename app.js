const express = require ("express");
const bodyParser = require ("body-parser");
const date = require (__dirname + "/date.js")


const app =express();
const   items = ["buy food","cook food","eat food"];
const   workItems = [];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    
    const   day = date.getday();
    res.render('list',{listTittle : day , newListItems : items});

})

app.post("/",(req,res)=>{


    if ( req.body.button === "work") {
        const   workItem = req.body.newItem;
        workItems.push(workItem);
        res.redirect("/work");

    } else {
        items.push(req.body.newItem);
        res.redirect("/")  
    }
      
})

app.get("/work",(req,res)=>{
    res.render('list',{listTittle :"work Items",newListItems :workItems})
    
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.listen(3000,()=>
{
    console.log("server is running on port 3000");
})


