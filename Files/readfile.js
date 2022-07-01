const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'test','hello.txt'),'utf-8',(err,data)=>{
    if(err)
    {
        console.log('error in reading the file');
            }
            console.log('file read is successful',data)
})