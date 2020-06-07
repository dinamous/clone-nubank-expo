import React,{useState} from 'react';
import { View,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'

import { Container,Titulo,BtnEnviar,BtnEnviarMenssagem,telefone } from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";

import undraw from '../../assets/undraw_friends_online_klj62.png'
import image from "../../assets/qrcode.png"

export default function Amigos(){
    const [phoneBr,setPhoneBR] = useState('');
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
      }

     
    return(
        <Container>
            <TouchableOpacity onPress={navigateBack}>
                <Icon name="close" size={35} color="#666"/>
            </TouchableOpacity>

            <Titulo>Qual número deseja recarregar?</Titulo>
            
            <TextInputMask
                style={{
                    height: 50,
                    width: '100%',
                    fontSize:25,
                    paddingLeft:10,
                    marginTop:50,
                }}
                autoFocus={true}
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
                value={phoneBr}
                onChangeText={text => {
                    setPhoneBR(text)
                }
                    
            }
            />

            <BtnEnviar>
                <BtnEnviarMenssagem> CONTINUAR </BtnEnviarMenssagem>
            </BtnEnviar>
        </Container>
    );
};