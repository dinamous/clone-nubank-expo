import React,{useState} from 'react';
import { View,TouchableOpacity,TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'

import { Container,Topo,Titulo, Input,Pesquisa,Item,
  Topico,Categorias,TituloCategoria,Descricao,Coluna,
Botoes,Email,Chat,EmailTexto,ChatTexto} from './styles';

import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome,Ionicons } from '@expo/vector-icons'; 

export default function Ajuda(){
    
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
                <Titulo>ME AJUDA</Titulo>
            </Topo>

          <Pesquisa>
          <Input
                
                placeholder="Buscar Contato"
                placeholderTextColor="#666"
            />
             <FontAwesome name="search" size={24} color="#AAA" />
          </Pesquisa>

          <Topico>Todas Categorias</Topico> 
          <Categorias>
            <Item>
              <Coluna>
                  <TituloCategoria>Corona Vírus</TituloCategoria>
                  <Descricao>Duvidas sobre o corona? Veja Aqui</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Auxílio Emergencial</TituloCategoria>
                  <Descricao>Duvidas sobre o auxílio? Veja Aqui</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Novidades</TituloCategoria>
                  <Descricao>Saiba mais sobre os produtos Nubank</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Conta</TituloCategoria>
                  <Descricao>Conheça tudo sobre sua conta digital</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Pagar Fatura</TituloCategoria>
                  <Descricao>Veja como parcelar sua fatura e tudo mais</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Limite de Crédito</TituloCategoria>
                  <Descricao>Tire suas dúvidas sobre o limite de crédito</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Cartão de Crédito</TituloCategoria>
                  <Descricao>Tire suas dúvidas sobre o cartão de crédito</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  

            <Item>
              <Coluna>
                  <TituloCategoria>Cartão Virtual</TituloCategoria>
                  <Descricao>Conheça as funcionalidades do cartão digital</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
            <Item>
              <Coluna>
                  <TituloCategoria>Rewards</TituloCategoria>
                  <Descricao>Tudo sobre o programa Rewards</Descricao>
              </Coluna>
              <Ionicons name="ios-arrow-forward" size={18} color="black" />
            </Item>  
          </Categorias>
          
        <Botoes>
          <Email><EmailTexto>E-MAIL</EmailTexto></Email>
          <Chat><ChatTexto>CHAT</ChatTexto></Chat>
        </Botoes>

          
        </Container>
    );
};