/// src/components/Sidebar.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  useMediaQuery,
  Flex,
  Accordion,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ScrollingText from './Sidebar/ScrollingText';
import SidebarItem from './Sidebar/SidebarItem';

const menuItems = [
  { title: 'Home', isAccordion: false, children: [] },
  { title: 'Introdução', isAccordion: false, children: [] },
  {
    title: 'Fundamentos',
    isAccordion: true,
    children: ['Configurando', 'Posicionamento', 'Strafe'],
  },
  {
    title: 'Movimentos',
    isAccordion: true,
    children: [
      'Slide Jump',
      'Air Strafe',
      'Wall Jump',
      'Tap Strafe',
      'Mantle Jump',
      'Superglide',
    ],
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
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

  return (
    <Flex
      position={'fixed'}
      as="aside"
      w={getWidth()}
      h="100vh"
      p={0}
      color={'gui.seasalt'}
      bgColor={'gui.notblack'}
      zIndex={10}
    >
      {/* Rest of the sidebar */}

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
        <ScrollingText text='APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | APEX MOVEMENT | ' />

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
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              isOpen={isOpen}
              isHome={index === 0}
              isSecond={index === 1}
            />
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Sidebar;