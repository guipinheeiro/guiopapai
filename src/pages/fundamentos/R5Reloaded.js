import React from 'react';
import {
    Box,
    Text,
    Center,
    OrderedList,
    ListItem,
    Card
} from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';
import { Link } from 'react-router-dom';


const R5Reloaded = () => {
    return (

        <Box as="main" h="100vh" p={4} color={'gui.seasalt'} textStyle="body" flexDirection="column">
            <Text textStyle="h0" mb={4}>
                Treinando com o <Text as='span' color={'gui.bloodred'}>R5Reloaded</Text>
            </Text>
            <Text mb={4}>
                Vou passar uma letra pra vocês! Eu curto muito treinar <Text as='span' fontWeight={'700'} color={'gui.green'}>movimentos</Text> e <Text as='span' fontWeight={'700'} color={'gui.bloodred'}>1v1's</Text> no R5. O R5 é uma Build (versão de Apex) feita para desenvolvedores. Então existem algumas liberdades que fizeram com que a comunidade pudesse experimentar com a criação de mapas e modos de jogos, como 1v1, ginásio da movimentação e até um Aim Trainer com cenários que vivenciamos jogando Apex.
            </Text>
            <Card backgroundColor={'gui.green'} fontWeight={'400'} p={4}>
                
                <Text textStyle="h2" color={'gui.notblack'} mb={4}>
                     <Text as="span" >Instalando</Text> o R5
                </Text>
                <Text mb={4} color={'gui.notblack'}>
                    Para baixar o R5 e os scripts atualizados, siga os passos ou assista o vídeo abaixo:
                </Text>
                <OrderedList mb={4}  color={'gui.raisinblack'}>
                    <ListItem>
                        Clique <Link Link href="https://4mp1r5-my.sharepoint.com/personal/r5reloaded_4mp1r5_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fr5reloaded%5F4mp1r5%5Fonmicrosoft%5Fcom%2FDocuments%2FR5Reloaded%2E7z&parent=%2Fpersonal%2Fr5reloaded%5F4mp1r5%5Fonmicrosoft%5Fcom%2FDocuments&ga=1" isExternal ><Text as={'span'} fontWeight={'700'} color={'gui.bloodred'}>AQUI</Text></Link> e baixe a build original do <Text as={'span'} fontWeight={'700'}>R5Reloaded</Text>.
                    </ListItem>
                    <ListItem>
                        Faça a descompactação dos arquivos baixados.
                    </ListItem>
                    <ListItem>
                        Clique <Link Link href="https://github.com/M1kep/R5ReloadedInstaller/releases/download/v0.15.1/r5util-v0.15.1-windows-amd64.zip" isExternal ><Text as={'span'} fontWeight={'700'} color={'gui.bloodred'}>AQUI</Text></Link> e baixe o <Text as={'span'} fontWeight={'700'}>R5Util</Text> no formato ZIP.
                    </ListItem>
                    <ListItem>
                        <Text as={'span'} fontWeight={'800'} color={'gui.raisinblack'}>IMPORTANTE:</Text> Extraia os arquivos do R5Util para a mesma pasta onde você extraiu o R5Reloaded.
                    </ListItem>
                    <ListItem>
                        <Text as={'span'} fontWeight={'700'}>Abra a aplicação R5Util.exe</Text> e aguarde a instalação dos scripts.
                    </ListItem>
                
                </OrderedList>
                    <Center>
                        <VideoPlayer url="https://www.youtube.com/watch?v=hC8q7H3fwwE" />
                    </Center>
                
            </Card>

           
        </Box>



    );
};

export default R5Reloaded;
