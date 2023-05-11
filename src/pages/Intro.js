
import React from 'react';
import {
  Box,
  Kbd,
  Text,
} from '@chakra-ui/react';
import VideoPlayer from '../components/VideoPlayer';

const Intro = () => {
  return (
    <Box as="main" h="100vh" py={2} pr={4} color={'gui.seasalt'} textStyle="body" >
      <Text textStyle={'h2'}>SEJA <Text as='span' color={'gui.green'}>BEM-VINDO</Text></Text>
      <Text>Fala, Nerdolas!</Text>

      <Text >
        E aí, quer melhorar sua jogatina no nosso adorado Apéquinho? Seja para aprender aquele movimento incrível que você viu alguém executar ou simplesmente para dar um up no seu estilo de jogo, você chegou ao lugar certo! Fique à vontade para explorar o site, mas não deixe de dar uma espiadinha na seção PRIMEIROS PASSOS em Fundamentos antes de sair por aí como um ninja. 🥷
      </Text>

      <Text>
        Criei este site para compartilhar o que sei sobre movimentação no Apex Legends, trazendo dicas e tutoriais. Só um lembrete: <Text as={'span'} backgroundColor={'gui.green'} color={'gui.notblack'} fontWeight={'bold'}>Eu não sou pró-player!</Text> O que você lê aqui pode não ser 100% correto, e queremos manter um debate saudável. Por isso, entre no meu Discord ou grupo de Whatsapp para trocar ideias comigo e outros fãs dos 'movimentamentos' e, assim, aprimorarmos esse conteúdo juntos.
      </Text>

      <Text>
        E fique tranquilo, <Text as={'span'} fontWeight={'bold'}>não vamos só falar</Text> – teremos vídeos, gifs e imagens ilustrando cada movimento, situações onde aplicá-los e clipes de gameplay onde eles foram úteis, para que você aprenda de forma didática e divertida. 😜
      </Text>

      <Box width="100%" maxW="1280px" borderRadius={16}>
        <VideoPlayer url="https://www.youtube.com/watch?v=2lYX2GwTKVg" />
      </Box>

      <Text >
        Então, prepare-se, aqueça o scroll do mouse e o <Text color={'gui.seasalt'} as={'span'}><Kbd backgroundColor={'gui.raisinblack'}>W</Kbd> <Kbd backgroundColor={'gui.raisinblack'}>A</Kbd> <Kbd backgroundColor={'gui.raisinblack'}>S</Kbd> <Kbd backgroundColor={'gui.raisinblack'}>D</Kbd></Text>, porque aqui se inicia uma nova aventura! Vem comigo, Nerdola, e vamos conquistar juntos clipes o suficiente para fazermos um filme de grandes jogadas no Apex! 🎮🚀
      </Text>

      <Text>Tá esperando o quê? Bora lá! 🏃‍♂️💨</Text>

    </Box>
  );
};

export default Intro;