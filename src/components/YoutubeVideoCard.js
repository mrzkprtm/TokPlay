// src/components/YouTubeVideoCard.js
import React from 'react';
import {
  Box,
  Image,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from '@chakra-ui/react';
import { videoData } from './VideoData';
import { Link } from 'react-router-dom';

const YouTubeVideoCard = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={4}>
      {videoData.map(video => (
        <LinkBox
          key={video.id}
          as={Link}
          to={`/video/${video.id}`} // Use the video ID in the URL
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          cursor="pointer"
          _hover={{
            boxShadow: 'lg',
            transform: 'scale(1.05)',
          }}
        >
          <Image src={video.thumbnailUrl} alt="Video Thumbnail" />
          <LinkOverlay
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
          >
            <Heading as="h3" size="md" mt={2}>
              {video.title}
            </Heading>
          </LinkOverlay>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
};

export default YouTubeVideoCard;
