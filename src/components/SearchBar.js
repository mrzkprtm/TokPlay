// SearchBar.js
import React from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <InputGroup>
      <Input placeholder="Search videos..." />
      <InputRightElement children={<SearchIcon color="gray.500" />} />
    </InputGroup>
  );
};

export default SearchBar;
