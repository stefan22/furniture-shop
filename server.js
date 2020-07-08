const express = require("express"),
      jsonServer = require("json-server"),
      chokidar = require("chokidar"),
      cors = require("cors"),
      open = require("open");


// target file
const dataFile = process.argv[2] || "./assets/data.js"

// server port
const SERVER_PORT = 4000;
const port = process.env.SERVER_PORT || 4000;

let router = undefined;

// express server
const app = express();
app.use(cors());
app.use(jsonServer.bodyParser)

// file changes
chokidar.watch(dataFile).on("change", () => {
    console.log("restarting server..");
    createServer();
});

// jsonServer
const createServer = () => {
  delete require.cache[require.resolve(dataFile)];
  setTimeout(() => {
    router = jsonServer.router(require(dataFile)());
  },100);
}

createServer();

app.use("/api", (req, resp, next) => router(req, resp, next));

// opens localhost:4000 ...
app.listen(port, () => {
  let localHost = `http://localhost:${port}/api`;
  console.log("Running server @ ... ",localHost);
  open(localHost);
});

