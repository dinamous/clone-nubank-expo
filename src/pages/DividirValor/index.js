import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container,Content,Titulo,Valor,Mensagem,Circulo,CirculoMensagem,BtnAddPessoas,CirculoMenor,
    CirculoTexto, BtnEnviar,BtnEnviarMenssagem} from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";

import undraw from '../../assets/undraw_friends_online_klj62.png'
import image from "../../assets/qrcode.png"

export default function Amigos(){
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
      }

    return(
        <Container>
            <TouchableOpacity onPress={navigateBack}>
                <Icon name="arrow-back" size={35} color="#666"/>
            </TouchableOpacity>
            <Content>
                <Titulo>Valor Total para dividir</Titulo>
            <Valor>R$ 0,00</Valor>
            <Mensagem>Escreva uma mensagem</Mensagem>

            <Circulo>
                
                     <CirculoMensagem>Matheus</CirculoMensagem>
                     <CirculoMensagem>Simões</CirculoMensagem> 
                     <CirculoMensagem>R$ 0,00</CirculoMensagem>
                
            </Circulo>

            <BtnAddPessoas>
                <CirculoMenor>
                    <Icon name="add" size={24} color="#8b10ae" />
                </CirculoMenor>
                <CirculoTexto>Adicionar pessoas</CirculoTexto>
            </BtnAddPessoas>

            <BtnEnviar>
                <BtnEnviarMenssagem> ENVIAR PEDIDO</BtnEnviarMenssagem>
            </BtnEnviar>
            </Content>

            
        </Container>
    );
};