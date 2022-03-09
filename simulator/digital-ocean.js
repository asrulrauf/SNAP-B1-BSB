// ============ DIGITAL OCEAN BSB ============
var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/api/accounts/fe/source/details/MB/MB9775A001/1103109977', function(req, res) {
    fs.readFile('./data/digital-ocean/balance-inquiry.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

router.post('/api/history/fe/history/transaction', function(req, res) {
    fs.readFile('./data/digital-ocean/history-trx-inquiry.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

router.post('/api/transaction/fe/payment/va/execute', function(req, res) {
    fs.readFile('./data/digital-ocean/va-payment-execute.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

module.exports = router;