import styled from 'styled-components/native';
import {TextInput,ScrollView,StyleSheet} from 'react-native'

export const Container = styled.View`
  flex:1;
  background:#FFF;
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

export const Input = styled.TextInput`
font-size:18px;
`;

export const Pesquisa = styled.View`
  flex-direction: row;
  border: 1px #CCC;
  padding:15px;
  justify-content:space-between;
  margin:15px 15px 25px 15px;
`;

export const Item = styled.TouchableOpacity`
flex-direction:row;
justify-content:space-between;
align-items:center;
border-top-width: ${StyleSheet.hairlineWidth}px;
border-top-color: rgba(0, 0, 0, 0.1);
padding:15px;
`;


export const Subtitulo = styled.Text`
font-size:18px;
color:#666;
`;


export const Topico = styled.Text`
color:#999;
font-size:18px;
padding-left:15px;
margin:5px;
`;

export const Categorias = styled.ScrollView`
`;

export const Coluna = styled.View`
flex-direction:column;
`;

export const TituloCategoria = styled.Text`
font-weight:bold;
font-size:20px;
`;
export const Descricao = styled.Text`
color:#999;
`;

export const Botoes = styled.View`
flex-direction:row;

`;

export const Email = styled.TouchableOpacity``;

export const Chat = styled.TouchableOpacity``;

export const EmailTexto = styled.Text`
color:#83259f;
padding:25px 70px;
font-weight:bold;
border-width: ${StyleSheet.hairlineWidth}px;
border-color: rgba(0, 0, 0, 0.1);
`;
export const ChatTexto = styled.Text`
color:#83259f;
padding:25px 70px;
font-weight:bold;
border-width: ${StyleSheet.hairlineWidth}px;
border-color: rgba(0, 0, 0, 0.1);
`;
