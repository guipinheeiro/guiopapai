import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Checkbox, Box,Center } from '@chakra-ui/react';

const VideoPlayer = ({ url, autoPlay }) => {
  const [isMuted, setIsMuted] = useState(true); // default to muted

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Box borderRadius={4} mb={4} >
      <ReactPlayer
        url={url}
        playing={autoPlay}
        loop
        muted={isMuted}
        volume={isMuted ? 0 : 0.5}
        style={{ maxWidth: '100%' }}
      />
      <Center >
          <Checkbox isChecked={isMuted} onChange={handleMuteToggle}>
            Mudo ativado
          </Checkbox>
      </Center>
    </Box>
  );
};

export default VideoPlayer;
