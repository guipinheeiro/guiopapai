import { Text, Box, VStack } from "@chakra-ui/react";
import { ReactComponent as ShieldSvg } from "../../assets/imgs/evo-shield.svg";

const EvoShield = () => {
  const svgColor = "purple"; // customize SVG color here

  return (
    <VStack align="start" spacing={2}>
      <Box display="flex" alignItems="center">
        <Text mr={2}>Quantidade de shield disponível</Text>
        <ShieldSvg style={{ maxHeight: 10,fill: svgColor }} />
      </Box>
      <Text>Shield branco: 50</Text>
      <Text>Shield Azul: 75</Text>
      <Text>Shield Roxo / Dourado: 100</Text>
      <Text>Shield Vermelho: 125</Text>
    </VStack>
  );
};

export default EvoShield;