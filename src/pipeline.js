const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');

module.exports = (app, config) => {
    app
        .use(convert(bodyParser()))
        .use(router.routes())
        .use(router.allowedMethods());
};