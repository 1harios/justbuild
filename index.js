const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // GET / (Index Route)
  // Return a frame which renders an image with four redirect buttons
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
         <head>   
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            
            <meta property="og:title" content="FC Dev Call" />
            <meta property='og:image' content="https://fc-dev-call.replit.app/image" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image" />
            
            <meta property="fc:frame:button:1" content="Farcaster" />
            <meta property="fc:frame:button:1:action" content="link" />
            <meta property="fc:frame:button:1:target" content="https://www.farcaster.xyz/" />
            
            <meta property="fc:frame:button:2" content="Warpcast" />
            <meta property="fc:frame:button:2:action" content="link" />
            <meta property="fc:frame:button:2:target" content="https://www.warpcast.com/" />
            
            <meta property="fc:frame:button:3" content="Farcaster Docs" />
            <meta property="fc:frame:button:3:action" content="link" />
            <meta property="fc:frame:button:3:target" content="https://docs.farcaster.xyz/" />
            
            <meta property="fc:frame:button:4" content="Farcaster Hubble" />
            <meta property="fc:frame:button:4:action" content="link" />
            <meta property="fc:frame:button:4:target" content=https://www.thehubble.xyz/ />

          </head>
          <body>A Farcaster Linktree Frame</body>
      </html>`);
    res.end();

    // GET /image
    // Return the image used in the image tag
  } else if (req.url === "/image") {
    const imagePath = path.join(__dirname, "frame-fc.png");
    const imageStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    imageStream.pipe(res);
    // Catchall 404 Route
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
