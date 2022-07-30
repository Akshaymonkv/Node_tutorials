fs = require('fs'); //this is to import the fs module inside the node to read files

data = fs.readdirSync('C:/'); //readdir - is the functino to read the file system and Sync is to 
//                              read the contents synchronously
console.log('data:',data);//So it first reads all the contents in the file system and prints it
console.log('This comes after')//Here, this prints next then