const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const date = require(__dirname+"/date.js")

var item = ["Buy Food","Drink water","Assignments"];
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static("public"))


app.get("/",function(req,res){
  let day = date();

  res.render("list",{kindOfDay:day,item:item})
})


app.post("/",function(req,res){
  item.push(req.body.listAdd);
  res.redirect("/")
})



app.listen(3000,function(){
  console.log("Hey the server is running on port 3000!");
})
