const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let all_items = []

app.get('/', function(req, res){
    res.render('setUp', {

    });
});

app.post('/', function(req, res){
    
    let name1 = req.body.c1;
    let name2 = req.body.c2;
    let name3 = req.body.c3;
    let name4 = req.body.c4;

    all_items.push(name1);
    all_items.push(name2);
    all_items.push(name3);
    all_items.push(name4);

    console.log(all_items)

    res.redirect('/successfullyAdded');

});

app.get('/successfullyAdded', function(req, res){
    res.render('successfullyAdded', {
        'allItems': all_items
    });
});

app.listen(3000, function(req, res){
    console.log("The server is live on port 3000");
});