import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container,Titulo,Subtitulo,LineButton,LineButtonText,Undraw,Code } from './styles';

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
                <Icon name="close" size={35} color="#666"/>
            </TouchableOpacity>

            <Titulo>Resgate seus amigos da fila do banco</Titulo>
            <Subtitulo>Para cada indicação feita, um amigo salvo da buracracia</Subtitulo>

            <LineButton onPress={() => {}}>
                <LineButtonText>INDICAR AMIGOS</LineButtonText>
            </LineButton>

            <Code>
                <Undraw source={undraw}/>
            </Code>
            
        </Container>
    );
};