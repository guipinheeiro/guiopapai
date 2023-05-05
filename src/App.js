// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'
import {
  Grid
} from '@chakra-ui/react';


const App = () => {
  return (
    <Grid templateColumns="auto 1fr" h="100vh" bgColor={'gui.notblack'}>
      <Sidebar />
      <Content  />
    </Grid>
  );
};

export default App;
