const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");
const validate = require("../middleware/validate");

router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.post("/", validate, postsController.createPost);
router.put("/:id", validate, postsController.updatePost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
