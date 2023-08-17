// components/WriteCommentForm.js
import React, { useState } from 'react';
import { VStack, Input, Textarea, Button, Box } from '@chakra-ui/react';

const WriteCommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name && commentText) {
      onSubmit({ name, commentText });
      setName('');
      setCommentText('');
    }
  };

  return (
    <Box
      position="sticky"
      bottom="0"
      left="0"
      width="100%"
      p={4}
      bg="white"
      boxShadow="md"
      zIndex="1"
    >
      <form onSubmit={handleSubmit}>
        <VStack align="stretch" spacing={2}>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your Comment"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            required
          />
          <Button type="submit" colorScheme="blue">
            Submit Comment
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default WriteCommentForm;
