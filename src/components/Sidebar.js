// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, Button, VStack, useMediaQuery, Text, Accordion, AccordionButton, AccordionItem, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getWidth = () => {
    if (isMobile) {
      return isOpen ? '360px' : '65px';
    }
    return isOpen ? '360px' : '65px';
  };

  return (
    <Flex
        position={isMobile ? 'fixed' : 'fixed'}
        as="aside"
        w={getWidth()}
        h="100vh"
        p={0}
        bgColor={'gui.notblack'}
        zIndex={10}
        overflowY="auto"
        transition="width 0.3s"
    >
    <Box bgColor={'gui.green'} w={'65px'} p={'0'} m={0}>
      <Button 
        position="fixed" 
        w={'48px'} 
        h={'48px'} 
        top={2} 
        left={2} 
        zIndex={20} 
        onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
      </Button>
        
      </Box>
      <Box 
        bgColor={'red'} 
        display={isOpen ? 'block' : 'none'}
      >
      <VStack alignItems={'start'}  m={'0'}>

      <Accordion pl={'48px'}
        pt={'2px'}
        opacity={isOpen ? '1' : '0'}
        transform={isOpen ? 'translateX(0)' : 'translateX(-40px)'}
        transition={'all 0.2s ease-in-out'}>
      <AccordionItem border={'0'}>
        <AccordionButton p={0}>
        <Text pl={4} textStyle="h1">Home</Text>
        </AccordionButton>
    </AccordionItem>
      </Accordion>
      </VStack>
      </Box>
    </Flex>
  );
};

export default Sidebar;
