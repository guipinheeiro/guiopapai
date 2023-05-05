// src/pages/Home.js
import React from 'react';

import {
  Box,
  Text,
  Button,
  Center
} from '@chakra-ui/react';
import VideoPlayer from '../components/VideoPlayer';
import Content from '../components/Content';




const Home = () => {
  
  return (
    <Box as="main" h="100vh" py={2} pr={4} color={'gui.seasalt'} textStyle="body" >
      <Text textStyle={'h0'}>Seja um Mestre do  <Text as='span' color={'gui.green'}>Movimento</Text></Text>
      <Text>
        Aprenda as técnicas avançadas de movimentação para dominar o Apex Legends.
      </Text>
      <Center >
        <Content borderRadius={4}>
          <VideoPlayer url="https://youtu.be/lXA6mdenSWA" autoPlay />
        </Content>
      </Center>

      <Center>
        
        <Button variant="guiGreen">Aprender agora!</Button>
      </Center>
    </Box>
  )
}

export default Home;
