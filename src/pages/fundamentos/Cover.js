import React from 'react';
import {
    Box,
    Text,
    Center,
    Card
}
    from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';


const Cover = () => {
    return (

        <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
            <Text textStyle="h1" mb={4}>
                Usar o <Text as={'span'} color={'gui.purp'}>Cover</Text> DE FORMA ESTRATÉGICA
            </Text>
            <Text mb={4}>
                A implementação estratégica de coberturas é uma parte essencial na minimização de danos desnecessários em qualquer jogo de combate. Para entender completamente sua importância, devemos inicialmente conceituar o que constitui uma "cobertura". No contexto de um jogo de combate, uma cobertura é qualquer elemento que interrompa a linha de visão e o fogo inimigo. Isso pode incluir edifícios, veículos, caixas de suprimentos ou até mesmo nuances topográficas do terreno. Portanto, a identificação rápida e precisa de coberturas potenciais é uma habilidade crucial.
            </Text>
            <Card my={'4'} p={'4'} fontWeight={'500'} backgroundColor={'gui.green'} color={'gui.notblack'}>
            <Text textStyle="h2" mb={4}>
                Cover eficaz
            </Text>
            <Text mb={4}>
                A utilização eficaz de coberturas envolve mais do que apenas se esconder atrás delas. A movimentação constante é fundamental, surgindo e desaparecendo de pontos de cobertura de forma imprevisível. Isto dificulta que os oponentes antecipem seus movimentos e, consequentemente, minimiza a chance de receber danos.
            </Text>
            </Card>
          <Center mt={4}>
                <VideoPlayer url="https://www.youtube.com/watch?v=6w9rbOTzPmg" controle />

            </Center>
            <Center>
                <Text fontSize={'12px'}>Exemplo utilizando árvore como cover para minimizar dano recebido.</Text>
            </Center>
            <Text mb={4}>
                Por exemplo, imagine que você está em um campo de batalha urbano, com várias construções ao redor. Você pode usar as esquinas dos edifícios como cobertura, surgindo para atirar e depois recuando para recarregar ou mudar de posição. Assim, seus oponentes terão dificuldade em prever de onde você surgirá a seguir.
            </Text>
            <Text mb={4}>
                Contudo, é crucial evitar o apego a uma única cobertura. Permanecer em um ponto de cobertura por um tempo prolongado torna sua posição previsível, tornando você um alvo fácil. A imprevisibilidade é uma das suas maiores aliadas no combate.
            </Text>
            <Text mb={4}>
                Além disso, tenha em mente que as coberturas podem ser benéficas para seus inimigos também. Esteja sempre vigilante quanto à possibilidade de adversários escondidos e tente prever suas ações.
            </Text>
            <Text mb={4}>
                Em resumo, a utilização eficaz de coberturas envolve a identificação rápida de potenciais pontos de abrigo, movimentação constante e imprevisível, e consideração do uso de coberturas pelos oponentes. Dominar essas habilidades pode significativamente melhorar seu desempenho em situações de combate.
            </Text>

              <Center mt={4}>
                <VideoPlayer url="https://youtu.be/JXytS6jsl3E" controle />

            </Center>
            <Center>
                <Text fontSize={'12px'}>Exemplo utilizando árvore como cover para minimizar dano recebido.</Text>
            </Center>
            
        </Box>
    );
};

export default Cover;

