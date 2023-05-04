// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gui: {
      raisinblack: "rgb(38, 37, 37)",
      seasalt: "rgb(249, 249, 249)",
      tropicalindigo: "rgb(166, 149, 255)",
      darkorange: "rgb(255, 153, 0)",
      green: "rgb(144, 255, 57)",
      bloodred: "rgb(255, 33, 60)",
      notblack: "rgb(19, 19, 19)",
      twitch: "rgb(118, 29, 242)",
      black: "rgb(0, 0, 0)",
      meioblack: "rgb(128, 128, 128)"
    },
  },
  textStyles: {
    h1: {
      fontFamily: 'Roboto Flex',
      fontSize: '64px',
      fontWeight: '634',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform:'uppercase',
 
    },
    h2: {
      fontFamily: 'Roboto Flex ',
      fontSize: '48px',
      fontWeight: '900',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform:'uppercase',
    },
    h3: {
      fontFamily: 'Roboto Flex ',
      fontSize: '36px',
      fontWeight: '900',
      lineHeight: '33px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform:'uppercase',
    },
    h4: {
      fontFamily: 'Roboto Flex ',
      fontSize: '32px',
      fontWeight: '900',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform:'uppercase',
    },
    body: {
      fontFamily: 'Roboto Flex ',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '21px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
  },
});

export default theme;
