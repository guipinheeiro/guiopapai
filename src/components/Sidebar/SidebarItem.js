import React from 'react';
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item, index, isOpen, isMobile, setIsOpen }) => {
  const isHome = index === 0;
  const isSecond = index === 1;
  const marginTop = isHome ? '10px' : isSecond ? '90px' : '0';
  const marginBottom = isSecond ? '20px' : '4px';

  const handleChildItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

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
          <Link to={item.path} onClick={handleChildItemClick}>
            <Text textStyle="h1" _hover={{ color: 'gui.green' }}>
              {item.title}
            </Text>
          </Link>
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
          <Link key={index} to={child.path} onClick={handleChildItemClick}>
            <Text mb={0} textStyle="h4menu" _hover={{ color: 'gui.green' }}>
              {child.title}
            </Text>
          </Link>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarItem;
