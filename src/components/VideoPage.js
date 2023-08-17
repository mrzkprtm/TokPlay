// components/VideoPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, VStack, HStack } from '@chakra-ui/react';
import VideoPlayer from './VideoPlayer';
import CommentSection from './CommentSection';
import WriteCommentForm from './WriteCommentForm';
import ProductCard from './ProductCard';
import productData from './productData';
import axios from 'axios';

// Function to generate example comments
const generateExampleComments = () => [
  // ... your example comments here ...
];

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    image: 'product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    image: 'product2.jpg',
  },
  // Add more products here...
];

const VideoPage = () => {
  const { videoId } = useParams();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <Flex direction="column" align="center" p={4}>
      {/* First Row */}
      <Flex direction="row" mb={4}>
        {/* Column 1 (VideoPlayer) */}
        <Box width="1000px" p={4}>
          <VideoPlayer embedUrl={embedUrl} />
          <Text fontSize="xl" fontWeight="bold">
            Video Title
          </Text>
        </Box>

        {/* Column 2 (CommentSection) */}
        <Box width="300px" p={4}>
          <VStack align="stretch" spacing={4}>
            <CommentSection comments={comments} />
          </VStack>
        </Box>
      </Flex>

      {/* Second Row */}
      <Flex direction="row">
        {/* Column 1 (ProductCard) */}
        <Box width="1000px" p={4}>
          {productData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

        {/* Column 2 (WriteCommentForm) */}
        <Box width="300px" p={4}>
          <WriteCommentForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default VideoPage;
