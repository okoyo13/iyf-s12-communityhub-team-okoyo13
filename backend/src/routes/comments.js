const express = require('express');
const c = require('../controllers/commentsController');
const router = express.Router({ mergeParams: true });

router.get('/', c.getComments);
router.post('/', c.addComment);
router.delete('/:commentId', c.deleteComment);

module.exports = router;