const connectToDb = require('./db/db.client');
const app = require('./app');
const logger = require('./helpers/logger');
const { PORT } = require('./common/config');

connectToDb(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});

process.on('uncaughtException', error => {
  logger.log('error', `Captured error: ${error.message}`);
  throw error;
});

process.on('unhandledRejection', reason => {
  logger.log('error', `Unhandled rejection detected: ${reason.message}`);
  throw reason;
});
