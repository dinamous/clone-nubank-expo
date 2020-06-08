import styled from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  background:#FFF;
  padding:15px;
`;

export const Content = styled.View`
justify-content: space-around;
flex:1;
`;

export const Item = styled.TouchableOpacity`
flex-direction:row;
justify-content:space-between;
align-items:center;
border-bottom-color:#ddd;
border-bottom-width:1px;
padding-bottom:50px;
`;

export const Info = styled.View`
max-width:250px;
`;


export const Titulo = styled.Text`
font-weight:bold;
font-size:17px;
`;

export const Subtitulo = styled.Text`
color:#666;
font-size:16px;
`;