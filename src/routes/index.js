const Router = require('koa-router');

const version               = require('../actions/versionAction');

let router = Router();

// balance
router.get('/api/version', version());

module.exports = router;