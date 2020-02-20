const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


// Return all Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.json({errMessage: e});
    console.log(e)
  }

});

// Submit a Post
router.post('/', async (req, res) => {
    console.log('POST request');
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    });

    try {
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (e) {
      res.json({errMessage: e});
      console.log(e)
    }
  }
);

// Find specific Post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (e) {
    res.json({errMessage: e});
    console.log(e)
  }
})

// Delete a specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({_id: req.params.postId});
    res.json(removedPost);
  } catch (e) {
    res.json({errMessage: e});
    console.log(e)
  }
});

// Edit a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {_id: req.params.postId},
      {$set: {title: req.body.title}}
    );
    res.json(updatedPost);
  } catch (e) {
    res.json({errMessage: e});
    console.log(e)
  }
})

module.exports = router;