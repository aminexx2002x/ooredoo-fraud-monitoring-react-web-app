const express = require('express');

const router = express.Router();

const infomsisdnController = require('../controllers/infomsisdnController');

router.get('/info_msisdn', infomsisdnController.getInfoMsisdnData);

module.exports = router;
