import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import './App.css';
import { Grid, useMediaQuery } from '@chakra-ui/react';

const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false); // Add isLoaded state

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingDelay);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const loadedDelay = setTimeout(() => {
        setIsLoaded(true);
      }, 0);

      return () => clearTimeout(loadedDelay);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading && (
        <div className="loading-bar">
          <div className="loading-bar-progress" />
        </div>
      )}
      <Grid
        h="100vh"
        bgColor="gui.notblack"
        position="relative"
        opacity={isLoaded ? 1 : 0} // Add opacity based on isLoaded state
        transition="opacity .5s ease-in" // Add CSS transition for opacity
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContentArea isOpen={isOpen} isLoading={isLoading} />
      </Grid>
    </div>
  );
};

export default App;
