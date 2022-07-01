const http = require('http')
const server = http.createServer((req, res)=> {
    const payload = {
        data: 'hello world'
    }
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(payload))
})

server.listen(5000,()=>{console.log("Listensing on port 5000")})