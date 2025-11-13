const http=require("http");

const server=http.createServer((req,res) => {

    if(req.url=='/'){
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end("WELCOME TO HOME PAGE!");
        }
        else if (req.url === "/about" && req.method === "GET") {
             res.writeHead(200, { "Content-Type": "text/html" });
             res.end("<h1>THIS IS A SAMLL NODE.JS SERVER</h1>");
        }
        else if(req.url === "/contact"){
           res.writeHead(200,{"Content-Type": "text/plain"});
           res.end("CONTACT US AT contact@example.com.");  
        }
        else{
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            res.setHeader("Content-Type", "text/plain");
            res.end("Page not found");
        }
});
server.listen(3000);