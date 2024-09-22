const pool = require('../db');

exports.getTelecomFraudData = (req, res) => {
    const { search } = req.query;
    let query = 'SELECT * FROM dailyfollowupopn';
    const queryParams = [];

    if (search) {
        query += ' WHERE MSISDN LIKE ?';
        queryParams.push(`%${search}%`);
    }

    pool.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Error fetching data from the database', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.json(results);
    });
};

