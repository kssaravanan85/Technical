const users1 = require('./users')
const http = require('http')
//console.log(users1)
function getAllUsers()
{
    return users1;
}

function getUserByID(id)
{
   return users1[id]
}
const server = http.createServer((req, res)=> {
    const[url, query] = req.url.split('?')
    console.log('url:', url)
    console.log('query:',query)
    if(url==='/users')
    {
        if(req.method == "GET"){
        res.writeHead(200, {'Content-Type':'application/json'})
        res.write('AllUsers')
        res.end(JSON.stringify(getAllUsers())) 
        }
        if(req.method=="POST")
        {
            
        }       
    }
    else if(url.startsWith('/users/'))
    {
        const itemID = url.split('/')[2];
        console.log("ItmeID:", itemID);
        res.writeHead(200, {'Content-Type':'application/json'})
        res.write('get user by ID')
        res.end(JSON.stringify(getUserByID(itemID)))  
    }
    
    
})
server.listen(2000,()=>{console.log("Listensing on port 2000")})