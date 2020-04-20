const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const createError = require('http-errors');

const logger = require('./helpers/logger');

const boardRouter = require('./resources/boards/board.router');

const taskRouter = require('./resources/tasks/task.router');
const userRouter = require('./resources/users/user.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  logger.log(
    'info',
    `url: ${req.url} params: ${JSON.stringify(
      req.query
    )}  body: ${JSON.stringify(req.body)}`
  );
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }

  next();
});

app.use('/boards', boardRouter);
app.use('/tasks', taskRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  next(createError(404, `Not found url: ${req.url}`));
});

app.use((error, req, res, next) => {
  logger.log('error', `error: ${error.status} ${error.message}`);
  res.status(error.status || 500);
  res.json({
    status: error.status,
    message: error.message
  });
  next();
});

module.exports = app;
