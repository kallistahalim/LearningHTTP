var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var inspirationalQuotes = [
    
    "Life is about making an impact, not making an income. --Kevin Kruse",

    "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
    
    "Strive not to be a success, but rather to be of value. –Albert Einstein",
    
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost"
    
];



function handleRequest(request, response) {
    var random = Math.floor(Math.random() * inspirationalQuotes.length);
    response.end(inspirationalQuotes[random]);
}

//create two different servers to listen to two different ports
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


server1.listen(PORT1, function() {
    console.log("server listening on : http://localhost:" + PORT2);
})

server2.listen(PORT2, function() {
    console.log("server listening on : http://localhost:" + PORT2);
})

