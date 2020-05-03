const local = require('./lib/local');
const server = require('./lib/server');
const { synchronize, pullPushInit } = require('./lib/utils');

pullPushInit(() => synchronize(local, server));