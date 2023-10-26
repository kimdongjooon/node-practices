// 
var http = require('http');
var fs = require('fs');
const path = require('path');

var server = http.createServer(function(req,res){
    console.log(req.url);

    if(req.url === '/'){
        req.url = '/index.html';
    }
    
    // app02를 저장하고있는 디렉토리의 패스경로.
    fs.readFile(__dirname+ "/public"+ req.url, function(error, data){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });

        res.end(data);
    }) ;

    

    
});

server.listen(9090, function(){
    console.log('server start...[9090]');
});