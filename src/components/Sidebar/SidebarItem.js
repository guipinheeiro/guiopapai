// src/components/Sidebar/SidebarItem.js
import React from 'react';
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const SidebarItem = ({ item, isOpen, isHome, isSecond }) => {
  const marginTop = isHome ? '10px' : isSecond ? '90px' : '0';
  const marginBottom = isSecond ? '20px' : '4px';

  if (!item.isAccordion) {
    return (
      <AccordionItem mt={marginTop} mb={marginBottom} border={'0'}>
        <Box
          opacity={isOpen ? '1' : '0'}
          transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
          transition={
            isOpen
              ? 'transform 0.3s ease-in .05s, opacity 0.3s ease-in .05s'
              : 'all 0s'
          }
        >
          <Text textStyle="h1" _hover={{ color: 'gui.green' }}>
            {item.title}
          </Text>
        </Box>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem mt={marginTop} mb={marginBottom} border={'0'}>
      <AccordionButton
        _expanded={{ color: 'gui.green' }}
        p={0}
        opacity={isOpen ? '1' : '0'}
        transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
        transition={
          isOpen
            ? 'transform 0.3s ease-in .1s, opacity 0.3s ease-in .1s'
            : 'all 0s'
        }
      >
        <Text textStyle="h1" _hover={{ color: 'gui.green' }}>
          {item.title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pl={8} pt={0} m={0}>
        {item.children.map((child, index) => (
          <Text
            key={index}
            mb={0}
            textStyle="h4menu"
            _hover={{ color: 'gui.green' }}
          >
            {child}
          </Text>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarItem;
