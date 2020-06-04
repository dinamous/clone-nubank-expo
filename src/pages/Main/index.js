import React from 'react';



import {Container,Content } from './styles';
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Card from '../../components/Card'
import Menu from '../../components/Menu'

export default function Main(){
    return(
        <Container>
            <Header></Header>
            <Content>
                <Menu></Menu>
                <Card></Card>
            </Content>
            
            <Tabs></Tabs>
        </Container>
    );
}