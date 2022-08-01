//This is a program to demonstarte the use of http module in node
var http = require('http') //importing the http module from node
//createServer is a server method with a callback function inside with two parameters,
//  first one is the request to the server and the second one is the response
http.createServer(function (request, response){
    response.writeHead(200) //This is used to show the status code in the header
    response.write('Hello again user') //this is the response to be posted in the web page
    response.end() //closing the connection with the end command
}).listen(8080)

//listen is used to listen the reponses from the port{any port specified}
console.log('the server is running on the port 8080');