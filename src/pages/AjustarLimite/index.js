import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container,Titulo,Topo,Valor,Disponivel,Limite,LimiteTexto,Botao,BotaoTexto } from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";
// import Slider from '@react-native-community/slider';
import { Slider } from 'react-native'

export default function AjustarLimite(){
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
      }

    return(
        <Container>
            <Topo>
                <TouchableOpacity onPress={navigateBack}>
                    <Icon name="close" size={35} color="#666"/>
                </TouchableOpacity>

                <Titulo>AJUSTE DE LIMITE</Titulo>

               
            </Topo>

            <Valor>R$ 251,60</Valor>
            <Disponivel>R$ 0,00 Disponível</Disponivel>
            
            <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={600}
                minimumTrackTintColor="#CCCCCC"
                maximumTrackTintColor="#808000"
                thumbTintColor="#83259f"
            />

             <Limite>
                <LimiteTexto>Pedir aumento de limite total </LimiteTexto>
            </Limite>

            <Botao>
                <BotaoTexto>AJUSTAR</BotaoTexto>
            </Botao> 

        </Container>
    );
};