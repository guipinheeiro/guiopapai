// src/components/ContentArea.js
import React from 'react';
import { Box, useMediaQuery, Center } from '@chakra-ui/react';

//ROUTES DE CONTEÚDO
import Home from '../pages/Home';
import EDD from '../pages/fundamentos/EDD';
import { Routes, Route } from 'react-router-dom';
import Intro from '../pages/Intro';
import R5Reloaded from '../pages/fundamentos/R5Reloaded';
import Cover from '../pages/fundamentos/Cover';
import Posicionamento from '../pages/fundamentos/Posicionamento';

const ContentArea = ({ isOpen }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const marginLeft = isMobile ? (isOpen ? '0' : '65px') : (isOpen ? '360px' : '65px');

  return (
    <Center width={isMobile ? '100vw': ''} h="100vh">
      <Box
        as="main"
        ml={marginLeft}
        h="100vh"
        maxWidth={isMobile ? '': '700px'}
        position={isMobile ? (isOpen ? 'fixed' : '') : ''}
        overflow={isMobile ? (isOpen ? "hidden" : "auto") : "auto"}
        css={{ transitionProperty: 'none' }}
        
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/edd" element={<EDD />} />
          <Route path="/posicionamento" element={<Posicionamento />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/r5reloaded" element={<R5Reloaded/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </Box>
    </Center>
  );
};

export default ContentArea;
