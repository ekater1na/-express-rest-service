const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: format.combine(
        format.uncolorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
      )
    }),
    new transports.File({
      filename: 'logs/info.log',
      level: 'info',
      format: format.combine(
        format.uncolorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
      )
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: 'logs/exceptions.log',
      format: format.combine(
        format.uncolorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
      )
    })
  ]
});

module.exports = logger;
