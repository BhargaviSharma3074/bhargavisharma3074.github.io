import http from 'http';

const server = http.createServer((req,res) => {
    res.end("Good Eveving!");
})

server.listen(8082, () => {
    console.log("Server Started...");
})