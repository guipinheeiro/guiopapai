// src/components/Sidebar.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  useMediaQuery,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';


const Sidebar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleSidebar = () => {
    if (!isOpen) {
      setExpandedItem(null);
    }
    setIsOpen(!isOpen);
  };

  const getWidth = () => {
    if (isMobile) {
      return isOpen ? '100vh' : '65px';
    }
    return isOpen ? '360px' : '65px';
  };
  
  const scrollingTextAnimation = keyframes`
  0% {
    transform: rotate(180deg) translateY(42%);
  }
  100% {
    transform: rotate(180deg) translateY(0%);
  }
`;

  return (
    <Flex
      position={isMobile ? 'fixed' : ''}
      as="aside"
      w={getWidth()}
      h="100vh"
      p={0}
      color={'gui.seasalt'}
      bgColor={'gui.notblack'}
      zIndex={10}
      transition={'all 0.1s ease-in-out'}
    >
     <Box w={'65px'} bgColor={'gui.notblack'} p={'0'} m={0} zIndex={20}>
  <Button
    bgColor={'gui.maisblack'}
    w={'48px'}
    h={'48px'}
    top={2}
    left={2}
    zIndex={1}
    onClick={toggleSidebar}
    _hover={{
      bg: 'gui.maisblack',
      borderColor: 'gui.meioblack',
      borderWidth: '1px',
    }}
  >
    <FontAwesomeIcon color={'gui.seasalt'} icon={faBars} />
  </Button>
  <Box
    ml={2}
    zIndex={'-1'}
    opacity={'.2'}
    textStyle={'h4'}
    css={{
      writingMode: 'vertical-lr',
      whiteSpace: 'nowrap',
      textOrientation: 'mixed',
      transform: 'rotate(180deg)',
      animation: `${scrollingTextAnimation} 8s linear infinite`,
    }}
  >
    APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | 
  </Box>
</Box>

      <Box h={'100%'} w={'100%'} ml={2}>
        <Accordion
          m={'0'}
          alignItems={'start'}
          opacity={isOpen ? '1' : '0'}
          transform={isOpen ? 'translateX(0)' : 'translateX(-100px)'}
          index={expandedItem}
          onChange={(index) => setExpandedItem(index)}
          allowToggle
          
        >
        
        <AccordionItem border={'0'}>
          <Box 
            mt={"10px"}
            opacity={isOpen ? '1' : '0'}
            transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
            transition={isOpen ? 'transform 0.3s ease-in .05s, opacity 0.3s ease-in .05s' : 'all 0s'}
            >
              <Text textStyle="h1" _hover={{color: 'gui.green'}}>
                  Home
              </Text>
          </Box>
            </AccordionItem>

            <AccordionItem mt={'90px'} mb={"20px"} border={'0'}>
              <Box
              opacity={isOpen ? '1' : '0'}
              transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
              transition={isOpen ? 'transform 0.3s ease-in .05s, opacity 0.3s ease-in .05s' : 'all 0s'}>
              
                    <Text textStyle="h1" _hover={{color: 'gui.green'}} >
                      Introdução
                    </Text>
              
              </Box>
            </AccordionItem>

            <AccordionItem mb={"4px"} border={'0'}>
              <AccordionButton
              _expanded={{color:'gui.green'}}
              p={0}
              opacity={isOpen ? '1' : '0'}
              transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
              transition={isOpen ? 'transform 0.3s ease-in .1s, opacity 0.3s ease-in .1s' : 'all 0s'}>
              
                    <Text textStyle="h1" _hover={{color: 'gui.green'}} >
                      Fundamentos
                    </Text>
                    <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>

                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Configurando
                </Text>
                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Posicionamento
                </Text>
                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Strafe
                </Text>
                

              </AccordionPanel>             
            </AccordionItem>
            <AccordionItem mb={'4px'} border={'0'}>
              <AccordionButton
              _expanded={{color:'gui.green'}}
              p={0}
              opacity={isOpen ? '1' : '0'}
              transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
              transition={isOpen ? 'transform 0.3s ease-in .15s, opacity 0.3s ease-in .15s' : 'all 0s'}>
              
                    <Text textStyle="h1" _hover={{color: 'gui.green'}}>
                      Movimentos
                    </Text><AccordionIcon />
              
              </AccordionButton>
              <AccordionPanel pl={8} pt={0} m={0}>
                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Slide Jump
                </Text>
                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Air Strafe
                </Text>
                <Text mb={0} textStyle="h4menu" _hover={{color: 'gui.green'}}>
                  Mantle Jump
                </Text>
              </AccordionPanel>             
            </AccordionItem>
      


      </Accordion>
      </Box>
    </Flex>
  );
};

export default Sidebar;
