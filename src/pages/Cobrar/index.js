import React,{useState} from 'react';
import { View,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'

import { Container,Titulo,BtnEnviar,BtnEnviarMenssagem,Subtitulo } from './styles';

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
                <Icon name="close" size={35} color="#666"/>
            </TouchableOpacity>

            <Titulo>Quanto você quer cobrar?</Titulo>
            
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
                fontSize:40,
                paddingLeft:10,
                marginTop:25
            }}
          />

          <Subtitulo>Não especificar um valor</Subtitulo>

            <BtnEnviar>
                <BtnEnviarMenssagem> CONTINUAR </BtnEnviarMenssagem>
            </BtnEnviar>
        </Container>
    );
};