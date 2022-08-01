/* To start the project first thing we need is to import express framework
   first thing to do will be to install express using npm install express
   then install node using npm i node
*/
var express = require('express')
//referncing a variable app to an instance of express using the below statement
var app = express()
/* now here we are going to serve a static file to the browser, for that created an index file index.html,
   'express.static' is used to let the browser know we are serving a static file.
    We are also passing the entire directory into the use function
*/
app.use(express.static(__dirname))

//to start and listen the requests we use app.listen which takes the parameter as port
//app.listen(3000)

/*Since we need to know whether the content is served on the browser, we can give a
  callback function with no parameters and then console a sample out
*/

var server = app.listen(3000, ()=>{
    console.log('Server is running on the port',server.address().port)
})
