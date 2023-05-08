import React from 'react';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Center,
} from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';


const ETD = () => {
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
        <ListItem>
          Seja o mestre do slide: Aprenda a usar o slide pra se movimentar de
          forma ágil e surpreender os oponentes. Um bom slide bem na hora H pode
          te salvar de uns tiros na cabeça.
        </ListItem>
      </UnorderedList>
      <Center mb={4}>
        <Box borderRadius={16}>
           {/* // Replace with the actual video URL */}
        </Box>
      </Center>
      <Text textStyle="h2" mb={4}>
        Usar o <Text as={'span'} color={'gui.purp'}>Cover de forma efetiva</Text> é o canal
      </Text>
      <Text mb={4}>
        Agora que você já tá craque no movimento, é hora de aprender a se
        esconder. Não, não tô falando de sair correndo e se enfiar debaixo da
        cama. Tô falando de usar o cenário a seu favor pra evitar danos.
      </Text>
      <UnorderedList mb={4}>
        <ListItem mb={4}>
          A arte de se esconder: Use as barreiras, muros, árvores e tudo mais
          que estiver no ambiente pra se proteger dos tiros. Mas não fica
          parado igual uma estátua, hein? Lembrese do movimento imprevisível!
</ListItem>

<Center>

<VideoPlayer url="https://www.youtube.com/watch?v=hC8q7H3fwwE" />

</Center>
<ListItem>
Olho na mira: Cuidado pra não expor demais seu personagem enquanto
mira nos inimigos. Aquela metadinha de corpo pra fora do esconderijo
pode ser fatal.
</ListItem>
</UnorderedList>

<Text>
Então, é isso aí, pessoal! Com essas dicas, você vai evitar danos
desnecessários e deixar os inimigos comendo poeira. Agora corre lá e
mostra pra eles como se faz! E não esquece de compartilhar suas vitórias
com a gente, hein? Boa sorte!
</Text>
</Box>



);
};

export default ETD;
