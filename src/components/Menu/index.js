import React from 'react';

import { Container,Code,QRCode,Nav,NavItem,NavText } from './styles';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

import QRcode from '../../assets/qrcode.png'


export default function Menu(){
    return(
        <Container>
            <Code>
                <QRCode source={QRcode}/>
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name="help-outline" size={20} color="white" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <MaterialIcons name="ios-person-add" size={20} color="white" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <MaterialCommunityIcons name="coin" size={20} color="white" />
                    <NavText>Configurar conta</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="credit-card" size={20} color="white" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="store" size={20} color="white" />
                    <NavText>Pedir conta PJ</NavText>
                </NavItem>
                
                <NavItem>
                    <MaterialIcons name="smartphone" size={20} color="white" />>
                    <NavText>Configurações do app</NavText>
                </NavItem>
                
            </Nav>
        </Container>
    );
};