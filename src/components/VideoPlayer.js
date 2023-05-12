// src/components/VideoPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Checkbox, Box, Center } from '@chakra-ui/react';

const VideoPlayer = ({ url, autoPlay, mudo }) => {
const [isMuted, setIsMuted] = useState(mudo ? true : false); // default to muted
 
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Box width="100%">
      <Box
        position="relative"
        paddingTop="56.25%" // 16:9 aspect ratio
        borderRadius={16}
        overflow="hidden"
      >
        <ReactPlayer
          url={url}
          playing={autoPlay}
          loop
          muted={mudo ? (isMuted) : ''}
          volume={isMuted ? 0 : 0.5}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>
      {mudo ? (
        <Center>
          <Checkbox mb={4} isChecked={isMuted} onChange={handleMuteToggle}>
            Mudo ativado
          </Checkbox>
        </Center>)
        : '' }
    </Box>
      
  );
};

export default VideoPlayer;