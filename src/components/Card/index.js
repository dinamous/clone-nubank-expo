import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container,Cardx,CardHeader,CardContent,CardFooter,Title, Description,Annotation} from './styles';

export default function Card(){
    return(
        <Container>
            <Cardx>
                <CardHeader>
                    <MaterialIcons name="attach-money" size={28} color="#666" />
                    <MaterialIcons name="visibility-off" size={24} color="#666" />
                </CardHeader>
                <CardContent>
                    <Title>Saldo Disponível</Title>
                    <Description>R$250,98</Description>
                </CardContent>
                <CardFooter>
                    <Annotation>Tranferência de R$15,00 recebida de Yasmin hoje às 14:00h</Annotation>
                </CardFooter>
            </Cardx>
        </Container>
    );
};