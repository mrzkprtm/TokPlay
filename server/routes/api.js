const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Video = require('../models/Video');
const Comment = require('../models/Comment');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all videos
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all comments for a video
router.get('/videos/:videoId/comments', async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const comments = await Comment.find({ videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new comment to a video
router.post('/videos/:videoId/comments', async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const { text } = req.body;

    const newComment = new Comment({ text, videoId });
    const savedComment = await newComment.save();

    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Other routes for creating, updating, and deleting data entities can be added similarly

module.exports = router;
