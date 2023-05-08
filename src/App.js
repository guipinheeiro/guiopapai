import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import './App.css';
import { Grid, useMediaQuery } from '@chakra-ui/react';

// Importação do conteúdo
import { BrowserRouter as Router} from 'react-router-dom';






const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

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
        opacity={isLoaded ? 1 : 0}
        transition="opacity .5s ease-in"
      >
        <Router>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
          <ContentArea isOpen={isOpen} isLoading={isLoading} />
        </Router>
      </Grid>
    </div>
  );
};

export default App;
