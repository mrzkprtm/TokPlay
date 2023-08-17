// Backend: server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://mrizkiprtm:HEubcU0PWS5TJgkx@mrizkiprtm.tbu3y3p.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define Mongoose schemas for products, videos, and comments
const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const VideoSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const CommentSchema = new mongoose.Schema({
  text: String,
});

const Product = mongoose.model('Product', ProductSchema);
const Video = mongoose.model('Video', VideoSchema);
const Comment = mongoose.model('Comment', CommentSchema);

// Define API routes to retrieve data
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/api/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
