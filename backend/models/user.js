// models/user.js
const db = require('./db');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [userData.name, userData.email, userData.password], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },
};

module.exports = User;