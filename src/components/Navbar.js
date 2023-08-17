// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  Flex,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search...');
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      bg="yellow.400"
      color="white"
      boxShadow="md"
    >
      {/* Wrap the Image component in a Link */}
      <Link to="/">
        <Image
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c1015e.png"
          alt="Logo"
          maxH="40px"
        />
      </Link>
      <Spacer />
      <InputGroup maxW="md">
        <Input placeholder="Search products..." />
        <InputRightElement>
          <Button
            colorScheme="teal"
            variant="ghost"
            px={4}
            h="full"
            borderRadius="4"
            borderLeftRadius="md"
          >
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Spacer />
      <Flex align="center">
        <Button colorScheme="teal" mr={2}>
          Log In
        </Button>
        <Button colorScheme="teal">Sign Up</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
