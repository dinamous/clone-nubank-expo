import React from 'react';
import { View } from 'react-native';

import { Container,Titulo,Texto,Mensagem,Fundo,Info,InfoMensagem,BtnDoar,BtnDoarMensagem } from './styles';


export default function Doacao(){
    return(
        <Container>
            <Titulo>Doe usando seu cartão de crédito</Titulo>

            <Texto>
                <Mensagem>Para fortalecer nossas iniciativas no combate ao corona vírus, estendemos este convite a você também.</Mensagem>
                <Mensagem>Através do aplicativo, agora você pode fazer doações para recursos médicos (Cruz Vermelha e Hospital das Clinicas de SP) ou distribuição de alimentos em todo o país (Ação da Cidadania e Action Aid).</Mensagem>
            </Texto>

            <Fundo>
                <Info><InfoMensagem>Saiba mais</InfoMensagem></Info>
                <BtnDoar>
                    <BtnDoarMensagem>QUERO DOAR</BtnDoarMensagem>
                </BtnDoar>
            </Fundo>
        </Container>
    );
};