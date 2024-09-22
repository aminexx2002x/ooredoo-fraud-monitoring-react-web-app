const express = require('express');

const router = express.Router();

const dailyFollowupController = require('../controllers/dailyFollowupController');

router.get('/daily_follow_opn', dailyFollowupController.getTelecomFraudData);

module.exports = router;
