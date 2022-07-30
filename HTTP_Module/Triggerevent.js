var http = require('http')
http.createServer(function(request, response){
    response.writeHead(200) //to write the status header
    //response.write('This is a new respone');
    //setTimeout is a function that is used to displaye a message in a specific time interval
    setTimeout(() => {
        response.write('Timed response');
        response.end() //to end the response
    }, 5000);
}

).listen(8080);