import styled from 'styled-components/native';

//Circulo,CirculoMensagem,BtnAddPessoas,CirculoMenor,
//CirculoTexto, BtnEnviar,BtnEnviarMenssagem
export const Container = styled.View`
  flex:1;
  background:#FFF;
  padding:15px;
`;

export const Content = styled.View`
align-items:center;
justify-content:space-between;
`;

export const Titulo = styled.Text`
font-size:24px;
margin: 15px 0;
`;

export const Valor = styled.Text`
color:#8b10ae;
font-size:32px;
margin:10px 0;
`;

export const Mensagem = styled.Text`
color:#8b10ae;
font-size:18px;
`;

export const Circulo = styled.View`
background:#8b10ae;
align-items:center;
justify-content:center;
height:120px;
width:120px;
flex-direction:column;
padding:30px;
border-radius:100px;
margin:50px 0;
`;

export const CirculoMensagem = styled.Text`
color:#FFF;
font-size:12px;
`;

export const BtnAddPessoas = styled.View`
align-items:center;
`;

export const CirculoMenor = styled.View`
border-color:#8b10ae;
padding:15px;
border-width:1px;
border-radius:100px;
`


export const CirculoTexto = styled.Text`
color:#666;
margin-top:5px;
`;

export const BtnEnviar = styled.TouchableOpacity`
border-top-width:1px;
border-top-color:#eee;
flex:1;
width:100%;
align-items:center;
margin-top:70px;
padding:10px;
height:100%;
`;

export const BtnEnviarMenssagem = styled.Text`
color:#ccc;
font-size:18px;
font-weight:bold;
`;