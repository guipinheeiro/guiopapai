import React from 'react';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  // Center,
} from '@chakra-ui/react';
// import VideoPlayer from '../../components/VideoPlayer';


const EDD = () => {
  return (

    <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
      <Text textStyle="h0" mb={4}>
        <Text as='span' color={'gui.green'}>Evite Danos Desnecessários</Text> no Jogo
      </Text>
      <Text mb={4}>
        E aí, galera! Vamos falar sobre como evitar aqueles danos
        desnecessários no jogo que acabam atrapalhando a nossa performance e,
        vamos ser sinceros, ninguém quer ser o amigo da equipe que só leva
        tiro, né? Então cola aqui e confere essas dicas valiosas!
      </Text>
      <Text textStyle="h2" mb={4}>
        Evite <Text as="span" color={'gui.orange'}>movimentos previsíveis</Text>
      </Text>
      <Text mb={4}>
        Primeiro de tudo, vamos falar sobre movimento. Se você se mexe feito um
        robô, já era! Os inimigos vão te ler mais fácil que gibi da Turma da
        Mônica. A dica aqui é: seja imprevisível e rápido! Como assim? Vamos
        lá:
      </Text>
      <UnorderedList mb={4}>
        <ListItem mb={4}>
          Fuja da monotonia: Evite movimentos repetitivos e padrões óbvios,
          como correr em linha reta ou pular sem parar. Sabe aquelas vezes que
          você fica preso no loop de pulo e acha que tá abafando? Não tá, não.
          Mude de direção, acelere e desacelere pra dificultar a mira dos
          inimigos.
        </ListItem>
        <ListItem mb={4}>
          Seja o mestre do slide: Aprenda a usar o slide pra se movimentar de
          forma ágil e surpreender os oponentes. Um bom slide bem na hora H pode
          te salvar de uns tiros na cabeça.
        </ListItem>
        <ListItem mb={4}>
          Quando estiver no aberto e sem cover, corra sem a arma na mão e procure cover o mais rápido o possível. Priorize o bom posicionamento e suas chances aumentam exponencialmente.
        </ListItem>
      </UnorderedList>
      <Text textStyle="h2" mb={4}>
        <Text as="span" color={'gui.green'}>Input e Output</Text> de dano
      </Text>
      <Text>É importante ressaltar que um bom desempenho na batalha não se resume apenas à capacidade de atirar bem. Embora o treino de mira seja crucial - e isso é um tópico por si só - vamos assumir, por hora, que você já tem domínio sobre essa habilidade.</Text>

      <Text>Agora, o que realmente faz a diferença no campo de batalha é a interação entre output e input de dano, juntamente com um posicionamento estratégico. Quando falamos de "output de dano", estamos nos referindo à quantidade de dano que você é capaz de causar ao inimigo. Já o "input de dano" é o dano que você recebe. Maximizar o primeiro e minimizar o segundo é a chave para o sucesso.</Text>

      <Text>Vamos considerar uma situação de combate 3v3, onde todos os jogadores possuem colete azul, o que totaliza 75 de armadura e 100 de vida. Isso significa que cada jogador tem um total de 175 pontos de vida. Seu objetivo é maximizar o output de dano, ou seja, conseguir esgotar os 175 pontos de vida dos adversários, minimizando o input de dano, ou seja, mantendo sua vida e armadura o mais alto possível.</Text>





      <Text>
        Então, é isso aí, pessoal! Com essas dicas, você vai evitar danos
        desnecessários e deixar os inimigos comendo poeira. Agora corre lá e
        mostra pra eles como se faz! E não esquece de compartilhar suas vitórias
        com a gente, hein? Boa sorte!
      </Text>
    </Box>



  );
};

export default EDD;
