const express = require('express');

const router = express.Router();

const infoTraficController = require('../controllers/infotraficController');

router.get('/info-trafic', infoTraficController.getInfoTrafic);

module.exports = router;
