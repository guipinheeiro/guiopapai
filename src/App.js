// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'


import {
  Grid
} from '@chakra-ui/react';



const App = () => {
  const [isOpen, setIsOpen] = useState(true); // add this line

  return (
    <Grid  h="100vh" bgColor={'gui.notblack'}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* pass isOpen and setIsOpen as props */}
      <Content isOpen={isOpen} /> {/* pass isOpen as a prop */}
    </Grid>
  );
};

export default App;
