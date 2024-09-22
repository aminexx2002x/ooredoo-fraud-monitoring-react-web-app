const express = require('express');

const router = express.Router();

const suiviMsisdnController = require('../controllers/suivi_msisdnController');

router.get('/daily-follow-up-opn/suivi-msisdn', suiviMsisdnController.getSuiviMsisdn);

module.exports = router;