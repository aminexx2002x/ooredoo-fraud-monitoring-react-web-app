const pool = require('../db'); // Adjust the path as needed

exports.login = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users';
    pool.query(query, [email], (queryErr, results) => {
        
        console.log(results)
        if (queryErr) {
            console.error(queryErr);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = results[0];

        if (password !== user.password) { // Plain text password comparison
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        return res.status(200).json({ message: 'Login successful' });
    });
};
