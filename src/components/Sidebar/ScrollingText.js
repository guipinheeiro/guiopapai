// src/components/ScrollingText.js
import React from 'react';
import { keyframes } from '@emotion/react';
import { Box } from '@chakra-ui/react';

const ScrollingText = ({ text }) => {
  const scrollingTextAnimation = keyframes`
    0% {
      transform: rotate(180deg) translateY(0%);
    }
    100% {
      transform: rotate(180deg) translateY(42%);
    }
  `;

  return (
    <Box
      ml={2}
      zIndex={-1}
      opacity={'.2'}
      textStyle="h4"
      css={{
        writingMode: 'vertical-lr',
        whiteSpace: 'nowrap',
        textOrientation: 'mixed',
        animation: `${scrollingTextAnimation} 8s linear infinite`,
      }}
    >
      {text}
    </Box>
  );
};

export default ScrollingText;
