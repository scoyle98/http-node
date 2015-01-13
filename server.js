var http = require('http');
var ejs = require('ejs');
var fs = require('fs');


var server = http.createServer(function(req,res){
  var path = req.url;
  var arrPath = path.split("/")
  //path params equivalent
  var width = parseInt(arrPath[1]);
  console.log(width);
  var height = parseInt(arrPath[2]);
  console.log(height);
  //this is equivalent to erb(:index,locals:{msg: msg})
  var str = fs.readFileSync('views/index.ejs','utf8')
  var rendered = ejs.render(str,{width: width, height: height})

  console.log(rendered);
  res.end(rendered)
})

server.listen(3000);
