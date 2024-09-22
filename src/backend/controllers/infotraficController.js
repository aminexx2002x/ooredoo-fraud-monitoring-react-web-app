const pool = require('../db');
const logger = require('../utils/logger');

// Fetch infotrafic data from the database
exports.getInfoTrafic = (req, res) => {
  pool.query('SELECT Customer_id, Contract_id, Pays, Type, Montant, Trafic_date FROM infotrafic', (error, results) => {
    if (error) {
      logger.error(`Error fetching data from the database: ${error.message}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(results);
  });
};
