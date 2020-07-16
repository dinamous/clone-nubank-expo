import styled from 'styled-components/native';
import {TouchableOpacity,StyleSheet} from 'react-native';

export const Container = styled.View`
  flex:1;
  background:#FFF;
  align-items:center;
  justify-content:space-between;
`;

export const Topo = styled.View`
flex-direction:row;
padding:15px;
align-items:center;
justify-content:space-evenly;
`;

export const Titulo = styled.Text`
font-size:16px;
margin:10px;
color:#666;
font-weight:bold;
flex:1;
text-align:center;
`;



export const Valor = styled.Text`
color:#83259f;
font-size:35px;
`;
export const Disponivel = styled.Text`
font-size:18px;
color:#AAA;
`;

export const Limite = styled.TouchableOpacity``;

export const LimiteTexto = styled.Text`
color:#83259f;
font-weight:bold;
font-size:16px;
`;

export const Botao = styled.TouchableOpacity`
border-top-width: ${StyleSheet.hairlineWidth}px;
border-top-color: rgba(0, 0, 0, 0.3);
width:100%;
align-items:center;
padding:15px;
`;

export const BotaoTexto = styled.Text`
color:#83259f;
font-size:18px;
font-weight:bold;
`;