const express = require('express');
const c = require('../controllers/usersController');
const router = express.Router();

router.get('/', c.getUsers);
router.get('/:id', c.getUser);
router.post('/', c.createUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);

module.exports = router;
