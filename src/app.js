'use strict';

const Koa = require('koa');
const config = require('config');

const app = new Koa();

const pipeline = require('./pipeline');


pipeline(app, config);


app.listen(config.server.port, () => {
    console.log('Running on http://%s:%s', config.server.host, config.server.port);
});