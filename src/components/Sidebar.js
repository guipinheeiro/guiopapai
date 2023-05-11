// src/components/Sidebar.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Accordion,
  Link
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faWhatsapp, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ScrollingText from './Sidebar/ScrollingText';
import SidebarItem from './Sidebar/SidebarItem';

const menuItems = [
  { title: 'Home', isAccordion: false, children: [], path: '/' },
  { title: 'Introdução', isAccordion: false, children: [], path: '/intro' },
  {
    title: 'Fundamentos',
    isAccordion: true,
    children: [
      // { title: 'Configurando', path: '/configurando' },
      { title: 'ETD', path: '/etd' },
      // { title: 'R5Reloaded', path: '/r5reloaded' },
      // { title: 'Posicionamento', path: '/posicionamento' },
      // { title: 'Strafe', path: '/strafe' },
    ],
  },
  {
    title: 'Movimentos',
    isAccordion: true,
    children: [
      // { title: 'Slide Jump', path: '/slide-jump' },
      // { title: 'Air Strafe', path: '/air-strafe' },
      // { title: 'Wall Jump', path: '/wall-jump' },
      // { title: 'Tap Strafe', path: '/tap-strafe' },
      { title: 'Mantle Jump', path: '/mantle-jump' },
      { title: 'Superglide', path: '/superglide' },
    ],
  },
];

const Sidebar = ({ isOpen, setIsOpen, isMobile }) => {

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

        
        
        <Link href="https://discord.com/invite/UGT4WyuYta" isExternal>
        <Button
          bgColor={'gui.maisblack'}
          w={'48px'}
          h={'48px'}
          top={24}
          left={2}
          zIndex={1}
          _hover={{
            bg: 'gui.maisblack',
            borderColor: 'gui.meioblack',
            borderWidth: '1px',
          }}
        >
          <FontAwesomeIcon color={'gui.seasalt'} icon={faDiscord} />
        </Button>
      </Link>

      <Link href="https://chat.whatsapp.com/JqHeWi9nvnCGOhgYJt1lfZ" isExternal>
        <Button
          bgColor={'gui.maisblack'}
          w={'48px'}
          h={'48px'}
          top={28}
          left={2}
          zIndex={1}
          _hover={{
            bg: 'gui.maisblack',
            borderColor: 'gui.meioblack',
            borderWidth: '1px',
          }}
        >
          <FontAwesomeIcon color={'gui.seasalt'} icon={faWhatsapp} />
        </Button>
      </Link>
      

      <Link href="https://www.youtube.com/@guiopapai" isExternal>
        <Button
          bgColor={'gui.maisblack'}
          w={'48px'}
          h={'48px'}
          top={32}
          left={2}
          zIndex={1}
          _hover={{
            bg: 'gui.maisblack',
            borderColor: 'gui.meioblack',
            borderWidth: '1px',
          }}
        >
          <FontAwesomeIcon color={'gui.seasalt'} icon={faYoutube} />
        </Button>
      </Link>

      <Link href="https://www.tiktok.com/@guiopapai" isExternal>
        <Button
          bgColor={'gui.maisblack'}
          w={'48px'}
          h={'48px'}
          top={36}
          left={2}
          zIndex={1}
          _hover={{
            bg: 'gui.maisblack',
            borderColor: 'gui.meioblack',
            borderWidth: '1px',
          }}
        >
          <FontAwesomeIcon color={'gui.seasalt'} icon={faTiktok} />
        </Button>
      </Link>
      
      <Link href="https://twitch.com/guiopapai" isExternal>
        <Button
          bgColor={'rgb(145, 70, 255)'}
          w={'48px'}
          h={'48px'}
          top={40}
          left={2}
          zIndex={1}
          _hover={{
            borderColor: 'gui.meioblack',
            borderWidth: '1px',
          }}
        >
          <FontAwesomeIcon color={'white'} icon={faTwitch} />
        </Button>
      </Link>

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
              index={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isMobile={isMobile}
            />
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Sidebar;