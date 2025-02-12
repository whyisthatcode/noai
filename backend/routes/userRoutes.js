const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get All Users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Create User
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "User created!" });
});

module.exports = router;

