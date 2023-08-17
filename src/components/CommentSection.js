// components/CommentSection.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CommentSection = ({ comments }) => {
  return (
    <Box
      maxHeight="482px" // Adjust the height as needed
      overflowY="scroll"
    >
      {comments.map((comment, index) => (
        <Box
          key={index}
          p={3}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          background="gray.100"
          textAlign="left"
        >
          <Text fontWeight="semibold" fontSize="sm">
            {comment.name}
          </Text>
          <Text fontSize="sm">{comment.commentText}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CommentSection;
