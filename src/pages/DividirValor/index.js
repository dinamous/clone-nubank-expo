import React,{useState} from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'

import { Container,Content,Titulo,Valor,Mensagem,Circulo,CirculoMensagem,BtnAddPessoas,CirculoMenor,
    CirculoTexto, BtnEnviar,BtnEnviarMenssagem} from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";

import undraw from '../../assets/undraw_friends_online_klj62.png'
import image from "../../assets/qrcode.png"

export default function Amigos(){
    const [valor,setValor] = useState('R$ 0,00');
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
                <TextInputMask
            type={'money'}
            autoFocus={true}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
            }}
            value={valor}
            onChangeText={text => {
              setValor(text)
            }}
            style={{
                height: 50,
                width: '100%',
                color:'#8b10ae',
                fontSize:30,
                textAlign:'center'
            }}
          />
            <Mensagem>Escreva uma mensagem</Mensagem>

            <Circulo>
                
                     <CirculoMensagem>Matheus</CirculoMensagem>
                     <CirculoMensagem>Simões</CirculoMensagem> 
        <CirculoMensagem>{valor}</CirculoMensagem>
                
            </Circulo>

            <BtnAddPessoas>
                <CirculoMenor>
                    <Icon name="add" size={24} color="#8b10ae" />
                </CirculoMenor>
                <CirculoTexto>Adicionar pessoas</CirculoTexto>
            </BtnAddPessoas>

            <BtnEnviar>
                <BtnEnviarMenssagem> ENVIAR PEDIDO </BtnEnviarMenssagem>
            </BtnEnviar>
            </Content>

            
        </Container>
    );
};