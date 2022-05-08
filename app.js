const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express();

var item=[];
let workItem=[];
let work= "work";




app.use(bodyParser.urlencoded({ // ye jab bhi body parser ko use karoge tab hamesha required hoga
  extended: true
}));
app.use(express.static("public"));


app.set('view engine', 'ejs');// ye to ejs use karne ka protocol hai





app.get("/", function(req,res){  // Date and item  data ke sath pura html file ke get karega client side me

let day = date.getDate();
res.render('list', {listTitle: day, item:item, work:"chandan"});
});





app.post("/",function(req,res){ //post route ko handle karta hai meaning user add button ke dabayega then only render hoga ye part
console.log(req.body);
console.log(req.body.button);

if(req.body.button=="work")
{
  workItem.push(req.body.toDoElement);

res.redirect("/work"); //isse work ka get wala file render hoga again
}
else
{
  item.push(req.body.toDoElement);// to push to the element entered by user into the item array

    res.redirect("/"); // to redirect to the get request and once more that will be rendered

}

});

app.get("/work",function(req,res){ // ye get karega list wale file ko jab tum browser me localhost:3000/work ko browse karoge
  res.render('list',{listTitle:"Work List", item:workItem, work:work});//ye list wale file ko render karega
});

/*app.post("/work", function(req,res){

  console.log(workItem);

  res.render("/work");
})*/





app.listen(3000,function()
{
  console.log("Server started on port 3000");
});
