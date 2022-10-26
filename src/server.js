// const { PORT = 5000 } = process.env;
const http = require("http");
const fs = require("fs");
const app = require("./app"); 
      
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(5000, 'localhost', () => {
    console.log('listening for requests on port 5000')
})


