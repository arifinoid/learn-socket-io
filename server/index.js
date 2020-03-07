const dotenv = require("dotenv").config({
  path: ".env"
});

const express = require("express");
const path = require("path");
const pjson = require("./package.json");
const logger = require("./logger");
const port = process.env.PORT || 8500;
const app = express();
const http = require("http").Server(app);
const io = require("./io").initialize(http);
const global_socket = require("./io").io();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

http.listen(port);

logger.info(`${pjson.name} Server Started >> `);
logger.info(`running in ${process.env.NODE_ENV}`);
logger.info(`running on port ${port}`);

setInterval(() => {
  global_socket.emit("PULSE", heartbeat());
}, 1000);

const heartbeat = () => {
  const pulse = Math.ceil(Math.random() * (160 - 60) + 60);
  logger.debug(`Heartbeat ${pulse}`);
  return pulse;
};

app.post("/notification", (req, res) => {
  logger.debug(`Message received: ${req.body.message}`);

  global_socket.emit("POPUP_NOTIFICATION", {
    message: req.body.message,
    color: req.body.color
  });

  res.send();
});
