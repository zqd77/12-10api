var express = require('express');
var router = express.Router();
var query = require('../mysql/configspl');

/* GET users listing. */
router.get('/api/get/list', function(req, res, next) {
    var page = req.query.page,
        pagesize = req.query.pagesize,
        type = req.query.type;
    query('select * from aidou where type=?', [type], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});

module.exports = router;