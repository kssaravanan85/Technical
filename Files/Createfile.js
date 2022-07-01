const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'test','hello.txt'),"Hello World",'utf-8',(err)=>{
    if(err)
    {
        console.log('error in creating the file', err)
        return
    }
    console.log('file created')
})
