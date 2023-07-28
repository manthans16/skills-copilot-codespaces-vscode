// Create web server with Express framework
// Create routes for comments
// ==============================================

var express = require('express');
var router = express.Router();

// Require controller modules
var comments_controller = require('../controllers/commentsController');

// GET request for creating a comment. NOTE This must come before routes that display comment (uses id).
router.get('/comment/create', comments_controller.comment_create_get);

// POST request for creating comment.
router.post('/comment/create', comments_controller.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', comments_controller.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', comments_controller.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', comments_controller.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', comments_controller.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', comments_controller.comment_detail);

// GET request for list of all comment items.
router.get('/comments', comments_controller.comment_list);

module.exports = router;