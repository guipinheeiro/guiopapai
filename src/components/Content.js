// src/components/Content.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Home from '../pages/Home';


const Content = () => {
  return (
    <Box as="main" h="100%" pl={'65px'}>
      <Home />
    </Box>
  );
};

export default Content;
