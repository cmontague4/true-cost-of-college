// Tell the server file to use HTTP
const http = require('http');

// Create a server using HTTP
const server = http.createServer((req, res) => {
    
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Set the response content
    res.write('<h1> Node.js server is "alive" </h1>');
    res.end();
});

// Set the port number to locally run the server
const port = 3000;

// Listen to the server on the port number to verify it runs
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});