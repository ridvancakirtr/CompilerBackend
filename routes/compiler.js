const express = require('express');
const router = express.Router({ mergeParams: true });

const { compiler } = require('../controllers/compiler');

router.route('/').post(compiler);

module.exports = router;