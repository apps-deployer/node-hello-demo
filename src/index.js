const http = require("http");

const PORT = parseInt(process.env.PORT || "8080");
const APP_NAME = process.env.APP_NAME || "node-hello";
const ENV_NAME = process.env.ENV_NAME || "unknown";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  const body = JSON.stringify({
    message: `Hello from ${APP_NAME}!`,
    env: ENV_NAME,
    framework: "Node.js (stdlib)",
  }, null, 2);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(body);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
