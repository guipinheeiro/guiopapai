// src/components/Content.js
import React from 'react';
import { Box, useMediaQuery} from '@chakra-ui/react';
import Home from '../pages/Home';



const Content = ({ isOpen }) => { 
  const marginLeft = isOpen ? '360px' : '65px';
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Box
    transition="all 0.1s ease-in-out"
    as="main"
    ml={marginLeft}
    h="100%"
    overflow={isMobile ? (isOpen ? "hidden" : "auto") : "auto"}
  >
    <Home />
  </Box>
  );
};

export default Content;
