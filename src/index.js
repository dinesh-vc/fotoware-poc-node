import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import environment from '../environment';
import error from './middlewares/error';
import routes from './app/routes/';
import path from 'path';

// getting application environment
const env = process.env.NODE_ENV;

// getting application config based on environment
const envConfig = environment[env];

// setting port value
const PORT = envConfig.port || 3000;

/**
 * Express instance
 * @public
 */
const app = express();

if (!global.status_codes)
    global.status_codes = require('./utils/statusCode');

if (!global.custom_message)
    global.custom_message = require('./config/message');

if (!global.Response)
    global.Response = require('./utils/responce');

if (!global.config)
    global.config = require('./config/config');

app.use(morgan(envConfig.logs));

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

// app.use(bodyParser.multipart());
app.use(express.static(path.join(__dirname, '/public')));

// CORS configuration 
app.use(cors({ 'origin': '*' }));

// mount api routes
app.use('/', routes);
// if error is not an instanceOf APIError, convert it.
app.use(error.converter);
// app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson));
// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

app.listen(PORT, () => {
    console.log("server listen on port:-", PORT)
});

//app.listen(PORT);
module.exports = app;