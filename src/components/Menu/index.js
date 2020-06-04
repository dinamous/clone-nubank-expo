import React from 'react';

import { Container,Code,QRCode,Nav,NavItem,NavText,SignOut,SignOutText } from './styles';
import { MaterialIcons,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

import QRcode from '../../assets/qrcode.png'


export default function Menu(){
    return(
        <Container>
            <Code>
                <QRCode source={QRcode}/>
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name="help-outline" size={24} color="white" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Ionicons name="ios-person-add" size={24} color="white" />
                    <NavText>Perfil</NavText>
                </NavItem>

                

                <NavItem>
                    <MaterialCommunityIcons name="coin" size={24} color="white" />
                    <NavText>Configurar conta</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="credit-card" size={24} color="white" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="store" size={24} color="white" />
                    <NavText>Pedir conta PJ</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="smartphone" size={24} color="white" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
                

                <SignOut onPress={()=>{}}> 
                    <SignOutText>SAIR DA CONTA</SignOutText>
                </SignOut>
            </Nav>
        </Container>
    );
};