import React from 'react';
import {
    Box,
    Text,
    UnorderedList,
    ListItem,
}
    from '@chakra-ui/react';
// import VideoPlayer from '../../components/VideoPlayer';


const Cover = () => {
    return (

        <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
            <Text textStyle="h1" mb={4}>
                Usar o <Text as={'span'} color={'gui.purp'}>Cover de forma efetiva</Text> é o canal
            </Text>
            <Text mb={4}>
                É hora de aprender a se esconder. Não, não tô falando de sair correndo e se enfiar debaixo da        cama. Tô falando de usar o cenário a seu favor pra evitar danos.
            </Text>
            <UnorderedList mb={4}>
                <ListItem mb={4}>
                    A arte de se esconder: Use as barreiras, muros, árvores e tudo mais
                    que estiver no ambiente pra se proteger dos tiros. Mas não fica
                    parado igual uma estátua, hein? Lembrese do movimento imprevisível!
                </ListItem>


                <ListItem>
                    Olho na mira: Cuidado pra não expor demais seu personagem enquanto
                    mira nos inimigos. Aquela metadinha de corpo pra fora do esconderijo
                    pode ser fatal.
                </ListItem>
            </UnorderedList>
        </Box>



    );
};

export default Cover;

