const pool = require('../db');
const logger = require('../utils/logger');

// Fetch data with join between infomsisdnand dailyfollowupopn
exports.getSuiviMsisdn = (req, res) => {
  const searchTerm = req.query.search || '';

  let query = `
  SELECT 
    s.IMSI,
    s.MSISDN,
    s.status,
    s.activation_date,
    s.deactivation_date,
    s.rate_plan,
    s.Bill_Cycle,
    s.Last_status_date,
    s.Contract_ID,
    s.Customer_ID,
    s.Client,
    s.Nom_Prenom,
    s.cutscode,
    s.CNI,
    s.City,
    s.State,
    s.Birthdate,
    h.LCD,
    h.TypeDetect,
    h.CATIG,
    h.CPT,
    h.UserFlagger,
    h.UserDeb
  FROM 
    infomsisdn s
  LEFT JOIN 
    dailyfollowupopn h ON s.MSISDN = h.MSISDN
`;



  if (searchTerm) {
    query += ` WHERE s.IMSI LIKE ? OR s.MSISDN LIKE ? OR s.Client LIKE ? OR s.Nom_Prenom LIKE ?`;
  }

  pool.query(query, [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`], (error, results) => {
    if (error) {
      logger.error(`Error fetching data: ${error.message}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(results);
  });
};
