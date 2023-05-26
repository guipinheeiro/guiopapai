import React from 'react';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Card,
  
} from '@chakra-ui/react';
// import VideoPlayer from '../../components/VideoPlayer';


const InputOutput = () => {
  return (

    <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
      <Text textStyle="h0" mb={4}>
        <Text as='span' color={'gui.purp'}>Input e Output</Text> de dano
      </Text>
      
      <Text>É importante ressaltar que um bom desempenho na batalha não se resume apenas à capacidade de atirar bem. Embora o treino de mira seja crucial - e isso é um tópico por si só - vamos assumir, por hora, que você já tem domínio sobre essa habilidade.</Text>

      <Text>Agora, o que realmente faz a diferença no campo de batalha é a interação entre output e input de dano, juntamente com um posicionamento estratégico. Quando falamos de "output de dano", estamos nos referindo à quantidade de dano que você é capaz de causar ao inimigo. Já o "input de dano" é o dano que você recebe. <Text as="span" color="gui.green" fontWeight={'600'}>Maximizar o dano que você exerce</Text> e <Text as="span" color="gui.bloodred" fontWeight={'700'}>minimizar o dano que recebe</Text> é a chave para o sucesso.</Text>

      <Card my={'4'} p={'4'} fontWeight={'500'} backgroundColor={'gui.seasalt'} color={'gui.raisinblack'}>
        <Text textStyle="h2" fontWeight={'700'}  >
          <Text as="span"> O segredo da vitória:<Text as="span" color="gui.bloodred">matemática</Text> </Text>
        </Text>

        <Text>A matemática desempenha um papel crucial na vitória no Apex Legends. Cada confronto no jogo pode ser destrinchado em uma equação matemática simples, mas poderosa. Dominar essa fórmula te coloca um passo à frente dos adversários. Vamos explorar essa teoria e, em seguida, aplicá-la na prática:</Text>

        <Text textStyle="h4" fontWeight={'700'}  >Um momento de <Text as="span" color="gui.orange">teoria</Text></Text>

        <Text>Imagine um embate em que você e o oponente estão equipados com coletes roxos completos, com 100 de escudo, e ambos possuem a vida cheia (200 pontos de dano precisam ser infligidos em cada um). Ambos estão utilizando a R99 com um pente de 19 balas. Vamos supor que vocês dois acertem 100% dos tiros.</Text>

        <Text textStyle="h5" fontWeight={'700'}  >Cenário 1: Confronto Direto</Text>

        Neste confronto, seu oponente começa a atirar 500ms antes de você.


        <UnorderedList mb={4}>
        <ListItem my={4}>
        Seu oponente começa a atirar.
        </ListItem>
        <ListItem mb={4}>
        Aos 0.5 segundos (500ms), você reage, mas já sofreu 99 pontos de dano, restando 101 pontos de vida. A vida do seu oponente ainda é 200.
        </ListItem>
        <ListItem mb={4}>
        Aos 1 segundo, você sofreu mais 99 pontos de dano, totalizando 198 pontos de dano. A essa altura, sua vida se esgota, enquanto seu oponente ainda tem 101 pontos de vida (200 - 99 de dano que você conseguiu causar a partir dos 500ms).
        </ListItem>

        </UnorderedList>

        Cenário 2: Confronto Estratégico com Cover

        Agora, vamos considerar a mesma situação inicial, mas desta vez, após levar os primeiros 99 pontos de dano, você busca cover.

        Aos 0 segundos, seu oponente começa a atirar.
        Aos 0.5 segundos (500ms), você sofreu 99 pontos de dano, restando 101 pontos de vida. Neste momento, você busca cover. A vida do seu oponente ainda é 200.
        Você utiliza uma célula de escudo enquanto está em cover, recuperando 25 pontos de vida. Isso aumenta seu total para 126 pontos de vida.
        Você sai do cover e surpreende seu oponente, atirando nele por 800ms antes de ele reagir. Durante esses 800ms, você causa aproximadamente 158 pontos de dano (198 DPS * 0.8s), deixando seu oponente com 42 pontos de vida (200 - 158).
        Quando ele reage, continua a atirar em você. Porém, como seu oponente tem menos vida (42 pontos), ele é derrotado primeiro.
        No final deste embate, você estaria vitorioso com aproximadamente 84 pontos de vida (126 - 42).
        Esses cenários demonstram como uma pequena mudança na estratégia, como buscar cover para usar uma célula de escudo, pode alterar completamente o resultado do embate, mesmo quando seu oponente tem a vantagem inicial de começar a

      </Card>

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


      <Text>
        Então, é isso aí, pessoal! Com essas dicas, você vai evitar danos
        desnecessários e deixar os inimigos comendo poeira. Agora corre lá e
        mostra pra eles como se faz! E não esquece de compartilhar suas vitórias
        com a gente, hein? Boa sorte!
      </Text>
    </Box>



  );
};

export default InputOutput;
