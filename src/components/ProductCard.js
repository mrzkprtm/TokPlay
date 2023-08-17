// components/ProductCard.js
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = () => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      background="white"
      textAlign="center"
    >
      <Image
        src="https://via.placeholder.com/150"
        alt="Product"
        maxH="150px"
        mx="auto"
      />
      <Text fontWeight="semibold" mt={2}>
        Product Title
      </Text>
      <Text>$19.99</Text>
      <Button colorScheme="teal" mt={2}>
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductCard;
