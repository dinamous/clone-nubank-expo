import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:15px;
  align-items:center;
  justify-content:space-between;
`;

export const Titulo = styled.Text`
color:#8b10ae;
font-weight:bold;
font-size:25px;
text-align:center;
`;

export const Texto = styled.View`
justify-content:space-around;`

export const Mensagem = styled.Text`
text-align:center;
font-size:17px;
color:#666;
margin-top:15px;
`;

export const Fundo = styled.View`
justify-content:space-around;
flex:.4;
`

export const Info = styled.TouchableOpacity`

`;

export const InfoMensagem = styled.Text`
color:#8b10ae;
text-align:center;
font-weight:bold;
`;

export const BtnDoar = styled.TouchableOpacity`
padding:20px 100px;
border-width:1px;
width:100%;
border-color:#8b10ae;
border-radius:4px;
`;

export const BtnDoarMensagem = styled.Text`
color:#8b10ae;
font-weight:bold;
`;
