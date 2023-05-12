import React from 'react';
import {
  Box,
  Text,

  Center,
  Card,
} from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';


const Posicionamento = () => {
  return (

    <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
      <Text textStyle="h0" mb={4} wordBreak={'keep-all'}>
        <Text as='span' color={'gui.green'}>Posicionamento</Text> é a prioridade
      </Text>
      <Text textStyle="h2" mb={4}>
        o papel do bom <Text as="span" color={'gui.orange'}>posicionamento</Text> 
      </Text>

      <Text>O posicionamento desempenha um papel fundamental nesse processo. A obtenção do high ground - ou seja, posicionando-se em um lugar mais alto que os inimigos - é uma estratégia vantajosa. Isso não só lhe dá uma visão mais ampla do campo de batalha, mas também torna mais difícil para os inimigos atingirem você enquanto você tem uma linha de tiro clara para eles.</Text>

      <Card my={'4'} p={'4'} fontWeight={'500'} backgroundColor={'gui.green'} color={'gui.notblack'}>
      <Text textStyle="h3" fontWeight={'700'}  my={0}>
        <Text as="span">não seja o foco</Text>
      </Text>
      <Text my={4}>Uma estratégia eficaz é atirar quando você não é o foco. Isso permite que você cause dano sem receber muito (ou nenhum) em troca. Portanto, é essencial monitorar a atenção do inimigo e aproveitar os momentos em que eles estão distraídos ou focados em seus colegas de equipe.</Text>
      </Card>

      <Text>Lembre-se, mesmo que seja um jogo, a batalha ainda é uma questão de vida ou morte - virtual, é claro. Então, posicione-se com sabedoria, monitore o output e o input de dano, e aproveite os momentos certos para atacar. A vitória estará ao seu alcance.</Text>
      
      <Center my={4}>
        <VideoPlayer url="https://www.youtube.com/watch?v=bEG1ma1ykok" controle />
        
      </Center>
      <Center>
        <Text mt={1} fontSize={'12px'}>Exemplo de fight com teoria aplicada e comentários.</Text>
      </Center>
      
    </Box>



  );
};

export default Posicionamento;

