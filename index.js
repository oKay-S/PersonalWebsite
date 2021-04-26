// Requirements
var express = require('express');
var app = express();
const path = require('path');
//app.use for setting up express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//sets the paths for the server to take files from
app.use(express.static(path.join(__dirname,'public')));

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));return;
})



app.use(function ( req, res, next) {
    res.sendFile(path.join(__dirname, 'public', '404.html'))
})

//Makes the website available on port 8080 (but most importantly makes the server actually work)
app.listen(8080, function(){
    console.log('listening on *:8080')
})