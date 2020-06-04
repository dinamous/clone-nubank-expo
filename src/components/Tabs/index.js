import React from 'react';

import { Ionicons,Entypo,MaterialIcons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';


import { Container,TabsContainer,TabItem,TabText } from './styles';

export default function Tabs(){
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Ionicons name="ios-person-add" size={24} color="white" />
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Entypo name="chat" size={24} color="white" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                <MaterialIcons name="smartphone" size={24} color="white" />
                    <TabText>Recarga de celular</TabText>
                </TabItem>
                <TabItem>
                    <Entypo name="chat" size={24} color="white" />
                    <TabText>Dividir Valor</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="attach-money" size={24} color="white" />
                    <TabText>Doar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-downward" size={24} color="white" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-upward" size={24} color="white" />
                    <TabText>Tranferir</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-upward" size={24} color="white" />
                    <TabText>Tranferir</TabText>
                </TabItem>
                <TabItem>
                    <Ionicons name="md-options" size={24} color="white" />  
                    <TabText>Ajustar Limite</TabText>
                </TabItem>
                <TabItem>
                    <Ionicons name="ios-help-circle-outline" size={24} color="white" />  
                    <TabText>Me Ajuda</TabText>
                </TabItem>
                <TabItem>
                    <MaterialCommunityIcons name="barcode" size={24} color="white" />  
                    <TabText>Pagar</TabText>
                </TabItem>
                <TabItem>
                <MaterialIcons name="lock-open" size={24} color="white" />  
                    <TabText>Bloquear Cartão</TabText>
                </TabItem>
                <TabItem>
                    <AntDesign name="creditcard" size={24} color="white" />  
                    <TabText>Cartão Virtual</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
};