import http from 'http';

const server = http.createServer((req,res) => {
    res.end("Reques Received!");
})

server.listen(8080, () => {
    console.log("Server Started...");
})