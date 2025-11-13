const http=require("http");

const server=http.createServer((req,res) => {

    if(req.url=='/'){
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end("Welcome to ABC College!");
        }
        else if (req.url === "/about" && req.method === "GET") {
             res.writeHead(200, { "Content-Type": "text/html" });
             res.end("<h1>About ABC College</h1>");
        }
        else{
           res.statusCode = 404;
           res.statusMessage = "Not Found";
           res.setHeader("Content-Type", "text/plain");
            res.end("Page not found");  
        }
});
server.listen(8080);