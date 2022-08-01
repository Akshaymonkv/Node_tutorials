var fs = require('fs') //calling or importing the fs module
var data = JSON.stringify({name:'toby'})//here we are assigning a value to the date variable
//stringify is used becuase a JSON file only accepts string data and JSON.stringify does that for us
fs.writeFile('data.json',data, (err)=>{
    console.log('file write complete')
})
//writefile is used to write the data into data.json file, and we need a callback function with just the err parameter