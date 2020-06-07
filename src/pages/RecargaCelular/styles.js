import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background:#FFF;
  padding:15px;
`;

export const Titulo = styled.Text`
font-size:24px;
margin:10px;
`;

export const BtnEnviar = styled.TouchableOpacity`
border-top-width:1px;
border-top-color:#eee;
flex:1;
width:100%;
align-items:center;
margin-top:100%;
padding:10px;
`;

export const BtnEnviarMenssagem = styled.Text`
color:#ccc;
font-size:18px;
font-weight:bold;
`;

export const telefone = styled.TextInput`
font-size:18px;
`;