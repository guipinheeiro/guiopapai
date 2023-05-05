// src/App.js
import { React,  useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css'


import {
  Grid,
  useMediaQuery
} from '@chakra-ui/react';



const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  return (
    <Grid h="100vh" bgColor="gui.notblack">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content isOpen={isOpen} />
    </Grid>
  );
};

export default App;



