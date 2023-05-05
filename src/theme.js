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
      maisblack: "rgb(45, 45, 45)",
      meioblack: "rgb(128, 128, 128)"
    },
  },
  textStyles: {
    h0: {
      fontFamily: 'Roboto Flex',
      fontSize: '84px',
      fontWeight: '634',
      lineHeight: '64px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: 'Roboto Flex',
      fontSize: '64px',
      fontWeight: '634',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform: 'uppercase',

    },
    h2: {
      fontFamily: 'Roboto Flex ',
      fontSize: '48px',
      fontWeight: '900',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Roboto Flex ',
      fontSize: '36px',
      fontWeight: '900',
      lineHeight: '33px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Roboto Flex ',
      fontSize: '32px',
      fontWeight: '900',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    h4menu: {
      fontFamily: 'Montserrat',
      fontSize: '32px',
      fontWeight: '500',
      lineHeight: '48px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
    body: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '300',
      lineHeight: '21px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '550',
        textTransform:'uppercase',
        borderRadius: 'xl',
      },
      variants: {
        guiGreen: (props) => {
          const mycolor = {
            dark: 'gui.notblack',
            light:'gui.green'
          }
          const bgColor = props.colorMode === 'dark' ? mycolor.light : mycolor.light;
          const textColor = props.colorMode === 'dark' ? mycolor.dark: mycolor.dark;
          const hoverBgColor = props.colorMode === 'dark' ? mycolor.dark : mycolor.dark;
          const hoverColor = mycolor.light;

          return {
            bg: bgColor,
            color: textColor,
            _hover: {
              bg: hoverBgColor,
              color: hoverColor,
              borderColor: hoverColor,
              borderWidth: '2px',
            },
          };
        },
      },
    },
  },
});

export default theme;
