// src/components/SidebarItem.js
import React, { useState } from 'react';
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const SidebarItem = ({ title, isAccordion, index, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem border={'0'}>
      <Box
        mt={index === 0 ? '10px' : ''}
        opacity={isOpen ? '1' : '0'}
        transform={isOpen ? 'translateX(0)' : 'translateX(-50px)'}
        transition={
          isOpen
            ? `transform 0.3s ease-in ${0.05 + index * 0.05}s, opacity 0.3s ease-in ${0.05 + index * 0.05}s`
            : 'all 0s'
        }
      >
        {isAccordion ? (
          <>
            <AccordionButton
              _expanded={{ color: 'gui.green' }}
              p={0}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Text textStyle="h1" _hover={{ color: 'gui.green' }}>
                {title}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{children}</AccordionPanel>
          </>
        ) : (
          <Text textStyle="h1" _hover={{ color: 'gui.green' }}>
            {title}
          </Text>
        )}
      </Box>
    </AccordionItem>
  );
};

export default SidebarItem;
