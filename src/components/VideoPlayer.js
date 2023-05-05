import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Checkbox, Box, Center } from '@chakra-ui/react';

const VideoPlayer = ({ url, autoPlay }) => {
  const [isMuted, setIsMuted] = useState(true); // default to muted

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
    <Box mb={1} position="relative" width="100%" paddingTop="52%">
      <Box 
      position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        borderRadius={16}
        overflow="hidden" >
        <ReactPlayer
          url={url}
          playing={autoPlay}
          loop
          muted={isMuted}
          volume={isMuted ? 0 : 0.5}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '50px',
          }}
        />
      </Box>
      </Box>
      <Center>
        <Checkbox mb={4} isChecked={isMuted} onChange={handleMuteToggle}>
          Mudo ativado
        </Checkbox>
      </Center>
    
    </>
  );
};

export default VideoPlayer;
