const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");

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

// listening..
app.listen(port, () => console.log(`running server on port ${port}`));

