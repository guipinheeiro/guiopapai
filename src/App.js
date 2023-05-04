// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import {
  Flex
} from '@chakra-ui/react';


const App = () => {
  return (
    <Flex bg="gui.notblack" h={'100%'}>
      <Sidebar />
      <Content />
    </Flex>
  );
};

export default App;
