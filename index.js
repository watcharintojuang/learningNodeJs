const http = require('http')

const server = http.createServer(function(req,res){
    res.write('<h1>Hello Watcharin</h1>')
    res.end()
})

server.listen(8080,() => {
    console.log("server running....")
})