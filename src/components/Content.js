// src/components/Content.js
import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Home from '../pages/Home';



const Content = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box as="main" h="100%" pl={isMobile ? '65px' : '0'}>
      <Home />
    </Box>
  );
};

export default Content;
