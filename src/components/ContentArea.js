// src/components/Content.js
import React from 'react';
import { Box, useMediaQuery,Center } from '@chakra-ui/react';
import Home from '../pages/Home';



const ContentArea = ({ isOpen }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const marginLeft = isMobile ? (isOpen ? '0' : '65px') : (isOpen ? '360px' : '65px');


  return (
    <Center>
      <Box
        as="main"
        ml={marginLeft}
        h="100vh"
        position={isMobile ? (isOpen ? 'fixed' : '') : ''}
        overflow={isMobile ? (isOpen ? "hidden" : "auto") : "auto"}
        css={{ transitionProperty: 'none' }}
      >
        <Home />
      </Box>
    </Center>
  );
};

export default ContentArea;