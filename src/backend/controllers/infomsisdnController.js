const pool = require('../db');

exports.getInfoMsisdnData = (req, res) => {
    const query = 'SELECT * FROM infomsisdn';
    
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data from the database', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.json(results);
    });
};
