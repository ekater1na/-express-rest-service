const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('../helpers/logger');
const exit = process.exit;

process
  .on('unhandledRejection', err => {
    logger(err.message, 'Unhandled rejection detected');
  })
  .on('uncaughtException', err => {
    logger(err.message, 'Uncaught Exception');
    exit(1);
  });

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
