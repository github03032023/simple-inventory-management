// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"content-type" : "text/plain"});
//     res.end("Hello from Node Js Server!!! ");
// });

// server.listen(3000, () =>{
//     console.log("server running at http://localhost:3000");
// })


const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
