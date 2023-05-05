// src/pages/Home.js
import React from 'react';

import {
  Box,
  Text,
  Button,
  Center,
} from '@chakra-ui/react';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {

  return (
    <Center as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
      <Text textStyle={'h0'}>Seja um Mestre do  <Text as='span' color={'gui.green'}>Movimento</Text></Text>
      <Text>
        Aprenda as técnicas avançadas de movimentação para dominar o Apex Legends.
      </Text>
      <Box width="100%" maxW="1280px" borderRadius={16}>
        <VideoPlayer url="https://youtu.be/_o8hMZaUrwo" autoPlay />
      </Box>
      <Button variant="guiGreen">Aprender agora!</Button>
    </Center>
  )
}

export default Home;