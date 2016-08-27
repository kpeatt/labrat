var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req)
  proxy.web(req, res, { target: 'http://10.65.7.145:8888' });

  proxy.on('error', function(e) {
    console.log(e);
    debugger;
    return;
  });
});

console.log("listening on port 9000")
server.listen(9000);
