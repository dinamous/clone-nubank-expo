import styled from 'styled-components/native';
import {TextInput,TouchableOpacity,StyleSheet} from 'react-native'

export const Container = styled.View`
  flex:1;
  background:#FFF;
`;

export const Topo = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:15px;
`;


export const Titulo = styled.Text`
font-size:16px;
margin:10px;
color:#666;
font-weight:bold;
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
justify-content:space-around;
align-items:center;
border-top-width: ${StyleSheet.hairlineWidth}px;
border-top-color: rgba(0, 0, 0, 0.1);
padding:15px 0;
`;
export const Item2 = styled.TouchableOpacity`
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

export const Divisoria = styled.Text`
  background-color:#f3f4f3;
  padding:15px;
  font-size:18px;
  color:#AAA;
  padding-left:30px;
`;
