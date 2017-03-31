const express = require('express');
const app = express();
const api = require('./ApiRequest.js')
var path = require('path');
var uuid = require('node-uuid');
var multer  = require('multer');
var upload = multer({dest: __dirname + '/public_html/images/'});
const ROOT = "./public_html";

app.use(function(req,res,next){
	console.log(req.method + " request for " + req.url);
	next();
});

app.listen(2017,function(){
	console.log('Server listening on port 2017');
});

app.post('/upload', upload.single('pic'), function (req, res, next) {
  console.log(req.file);
    res.send('yay')
});

//app.post("/upload", (req, res) => {
//
//    const filename = './images/'+ uuid.v4()+ req.files.image.fileName;
//	fs.writeFile(filename , req.files.image, function (err) {
//        if (err) throw err;
//        console.log("It's saved");
//        //pass name to Ben
//    });
//    
//	console.log("Image request");
//    
//});

app.use(express.static(ROOT));  //handle all static requests

app.all("*",function(req,res) {
	res.sendStatus(404);
});

app.use('/api', api);
