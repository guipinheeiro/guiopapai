// src/components/ContentArea.js
import React from 'react';
import { Box, useMediaQuery, Center } from '@chakra-ui/react';

//ROUTES DE CONTEÚDO
import Home from '../pages/Home';
import ETD from '../pages/fundamentos/ETD';
import { Routes, Route } from 'react-router-dom';
import Intro from '../pages/Intro';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/etd" element={<ETD />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Box>
    </Center>
  );
};

export default ContentArea;
