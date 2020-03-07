const sio = require("socket.io");
const logger = require("./logger");

let io = null;
const users = new Map();
const ids = new Map();

exports.initialize = server => {
  io = sio(server);
  io.on("connection", socket => {
    logger.debug(`A user connected with ${socket.id}`);

    socket.on("UPDATE_USER", data => {
      logger.debug(`UPDATE_USER triggered for ${data.name}`);

      users.set(data.name, {
        socketId: socket.id,
        ...data
      });
      ids.set(socket.id, data);

      socket.join(data.group);
    });

    socket.on("disconnect", () => {
      logger.debug(`${socket.id} disconnected`);
    });
  });
};

exports.io = () => {
  return io;
};
