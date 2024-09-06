// controllers/userController.js
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Validaciones básicas
  if (!name || !email || !password) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  // Encriptar la contraseña
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  User.create(newUser, (err, result) => {
    if (err) {
      return res.status(500).send('Error al registrar el usuario.');
    }
    res.status(201).send('Usuario registrado exitosamente.');
  });
};