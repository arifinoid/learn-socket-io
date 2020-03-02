const sio = require("socket.io");
const logger = require("./logger");

let io = null;

exports.initialize = server => {
  io = sio(server);
  io.on("connection", socket => {
    logger.debug(`A user connected with ${socket.id}`);

    socket.on("disconnect", () => {
      logger.debug(`${socket.id} disconnected`);
    });
  });
};

exports.io = () => {
  return io;
};
