fs=require('fs'); //this is to import the fs module inside the node to read files
//the below function is defined as a callback, it has two parameters err, and data
function phoneNUmber(err, data){
    console.log('data:',data);
};

//fs.readdir('C:/', phoneNUmber);
phoneNUmber(fs.readdir('C:/'))//passing the readdir as function to the phonenumber

console.log('This comes after') //this statement is printed first and in parallel
//the data is being read by readdir module in fs