var fs = require('fs'); //calling the fs or file system module

//below when I read the data, the data that is being read is not actually what we
//   input in the data.json file, try uncommenting the same and try

/*fs.readFile('data.json', function(err,data){
    console.log(data)
})
*/
//the above function did not work becuase the file format was not specified, we need to give it as below
fs.readFile('data.json','utf-8',(err,data)=>{
    console.log(data)
})