// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, Button, VStack, useMediaQuery, Text, Flex } from '@chakra-ui/react';
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
        bgColor={'gui.black'}
        zIndex={10}
        overflowY="auto"
        transition={'all 0.1s ease-in-out'}
        
    >
    <Box maxW={'65px'} bgColor={'gui.black'} p={'0'} m={0} zIndex={20} >
      <Button 
        w={'48px'} 
        h={'48px'} 
        m={2}
        onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
      </Button>
        
      </Box>
      <Box 
        h={"100%"}
        w={'100%'}
      >
      <VStack m={'0'} 
      alignItems={'start'}
      opacity={isOpen ? '1' : '0'}
      transform={isOpen ? 'translateX(0)' : 'translateX(-100px)'}
            transition={'all 0.3s ease-in'}
      >

            <Box mt={"10px"} 
            opacity={isOpen ? '1' : '0'}
            transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
            transition={isOpen ? 'all 0.3s ease-in' : ''}>
                <Text textStyle="h1">
                    Home
                </Text>
            </Box>

            <Box mt={"10px"} 
            opacity={isOpen ? '1' : '0'}
            transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
            transition={isOpen ? 'all 0.3s ease-in .15s' : ''}>
                <Text textStyle="h1">
                    Introdução
                </Text>
            </Box>
            
      


      </VStack>
      </Box>
    </Flex>
  );
};

export default Sidebar;
