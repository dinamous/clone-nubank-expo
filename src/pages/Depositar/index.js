import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container,Content,Item,Info,Titulo,Subtitulo } from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";
import { AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons';


export default function Amigos(){
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
      }

    return(
        <Container>
            <TouchableOpacity onPress={navigateBack}>
                <Icon name="close" size={35} color="#666"/>
            </TouchableOpacity>

           <Content>

            <Item>
                <AntDesign name="barcode" size={24} color="#8b10ae" />
                <Info>
                    <Titulo>Gerar um boleto de depósito</Titulo>
                    <Subtitulo>Pague onde preferir e receba o dinheiro na sua conta em até 3 dias úteis.</Subtitulo>
                </Info>
                <Ionicons name="ios-arrow-forward" size={15} color="black" />
            </Item>

            <Item >
            <Icon name="arrow-downward" size={24} color="#8b10ae" />
                <Info>
                    <Titulo>Depositar por TED ou DOC</Titulo>
                    <Subtitulo>Tranfira de outro banco para a sua conta do Nubank, se for TED cai no mesmo dia.</Subtitulo>
                </Info>
                <Ionicons name="ios-arrow-forward" size={15} color="black" />
            </Item>

            <Item>
                <FontAwesome name="money" size={24} color="#8b10ae" />    
                <Info>
                    <Titulo>Trazer seu salário</Titulo>
                    <Subtitulo>Receba todo mês direto na sua conta e não perca nenhum dia de rendimento.</Subtitulo>
                </Info>
                <Ionicons name="ios-arrow-forward" size={15} color="black" />
            </Item>


           </Content>
            
        </Container>
    );
};