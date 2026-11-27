const express = require('express');
const c = require('../controllers/usersController');
const router = express.Router();

router.get('/', c.getUsers);
router.get('/:id', c.getUser);
router.post('/', c.createUser);

module.exports = router;