const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'error.log'),
      level: 'error'
    }),
    new transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'info.log'),
      level: 'info'
    })
  ]
});

module.exports = logger;
