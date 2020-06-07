import React from "react";

import {
  Container,
  TabsContainer,
  TabItem,
  TabItemLast,
  TabText,
} from "./styles";
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { AntDesign,Feather,Octicons } from '@expo/vector-icons';

export default function Tabs({ translateY }) {
  const navigation = useNavigation();
  
  function navigateToAmigoss() {
    navigation.navigate('Amigos')
  }
  function navigateToDividirValor() {
    navigation.navigate('DividirValor')
  }
  function navigateToRecargaCelular() {
    navigation.navigate('RecargaCelular')
  }
  function navigateToCobrar() {
    navigation.navigate('Cobrar')
  }
  function navigateToDoacao() {
    navigation.navigate('Doacao')
  }

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 50],
              extrapolate: "clamp",
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: "clamp",
        }),
      }}
    >
      <TabsContainer>
        <TabItem onPress={navigateToAmigoss}>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        
        <TabItem onPress={navigateToDividirValor}>
          <Icon name="payment" size={24} color="#FFF" />
          <TabText>Dividir valor</TabText>
        </TabItem>

        
        <TabItem onPress={navigateToRecargaCelular}>
          <Icon name="stay-current-portrait" size={24} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>

        <TabItem onPress={navigateToCobrar}>
          <Icon name="account-balance-wallet" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        
        <TabItem onPress={navigateToDoacao}>
          <Icon name="sentiment-very-satisfied" size={24} color="#FFF" />
          <TabText>Doação</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>

        
        <TabItem>
        <Octicons name="settings" size={24} color="white" />
          <TabText>Ajustar limite</TabText>
        </TabItem>

        
        <TabItem>
          <Feather name="help-circle" size={24} color="white" />
          <TabText>Me ajuda</TabText>
        </TabItem>

        
        <TabItem>
          <AntDesign name="barcode" size={24} color="white" />
          <TabText>Pagar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>

        
        <TabItem>
         <AntDesign name="creditcard" size={24} color="white" />
          <TabText>Cartão Virtual</TabText>
        </TabItem>

        <TabItemLast>
          <Icon name="sort" size={24} color="#FFF" />
          <TabText>Organizar atalhos</TabText>
        </TabItemLast>
      </TabsContainer>
    </Container>
  );
}
