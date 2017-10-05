module.exports = () => {
    return function (ctx) {
        const pjson = require('./../../package.json');
        ctx.body = {
            version: pjson.version
        };
    }
}