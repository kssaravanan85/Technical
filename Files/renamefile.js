const fs = require('fs')
const path = require('path')



fs.mkdir(path.join(__dirname,"meta"), (err)=>{
    if(err)
    {
        console.log("Error occured in creating the directory"+err);
    }
    console.log('directory created');
})
fs.rename(path.join(__dirname,'test','my_name.txt'),path.join(__dirname,'meta','my_name.txt'), (err)=>{
    if(err)
    {
        console.log('error in renaming the file' + err)
    }
    console.log('filerenamed')
})