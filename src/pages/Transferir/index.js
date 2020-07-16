import React,{useState} from 'react';
import { View,TouchableOpacity,TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'

import { Container,Topo,Titulo, Input,Pesquisa,Item,Subtitulo,Divisoria,Item2} from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome,Ionicons } from '@expo/vector-icons'; 

export default function Amigos(){
    const [valor,setValor] = useState('R$ 0,00');
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

            <Titulo>TRANSFERIR</Titulo>

            <TouchableOpacity >
            <FontAwesome name="qrcode" size={35} color="#666" />
            </TouchableOpacity>
          </Topo>

          <Pesquisa>
          <Input
                
                placeholder="Buscar Contato"
                placeholderTextColor="#666"
            />
             <FontAwesome name="search" size={24} color="#AAA" />
          </Pesquisa>
            
          <Item>
            <Icon name="person-add" size={24} color="#83259f" />
            <Subtitulo>Transferir para novo contato</Subtitulo>
            <Ionicons name="ios-arrow-forward" size={18} color="black" />
          </Item>  

        <Divisoria>Frequentes</Divisoria>

        <Item2>
          
          <Subtitulo>Albert Medeiros</Subtitulo>
          <Ionicons name="ios-arrow-forward" size={18} color="black" />
        </Item2>  

        <Divisoria>Todos</Divisoria>
        <Item2>
          <Subtitulo>Albert Medeiros</Subtitulo>
          <Ionicons name="ios-arrow-forward" size={18} color="black" />
        </Item2> 
        <Item2>
          <Subtitulo>Maria Santos</Subtitulo>
          <Ionicons name="ios-arrow-forward" size={18} color="black" />
        </Item2> 
        <Item2>
          <Subtitulo>Felipe Assunção</Subtitulo>
          <Ionicons name="ios-arrow-forward" size={18} color="black" />
        </Item2> 

          
        </Container>
    );
};