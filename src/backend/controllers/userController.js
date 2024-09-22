const pool = require('../db');
const logger = require('../utils/logger');

// Fetch users from the database
exports.getUsers = (req, res) => {
  
  pool.query('SELECT Name AS name, TypeCompte AS typeCompte, Email AS email, password FROM login', (error, results) => {
    
    if (error) {
      logger.error(`Error fetching data from the database: ${error.message}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(results);
  });
};

// Create a new user in the database
exports.createUser = (req, res) => {
  const { name, typeCompte, email, password } = req.body;
  logger.info(`Received new user data: ${JSON.stringify(req.body)}`);
  pool.query(
    'INSERT INTO login (Name, TypeCompte, Email, password) VALUES (?, ?, ?, ?)',
    [name, typeCompte, email, password],
    (error, results) => {
      if (error) {
        logger.error(`Error inserting data into the database: ${error.message}`);
        return res.status(500).json({ error: 'Internal server error' });
      }
      logger.info('User created successfully');
      return res.status(201).json({ message: 'User created successfully' });
    }
  );
};

// Delete a user from the database
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  logger.info(`Received request to delete user with id: ${id}`);

  pool.query('DELETE FROM login WHERE id = ?', [id], (error, results) => {
    if (error) {
      logger.error(`Error deleting data from the database: ${error.message}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    logger.info('User deleted successfully');
    return res.status(200).json({ message: 'User deleted successfully' });
  });
};