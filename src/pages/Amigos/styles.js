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

export const Subtitulo = styled.Text`
font-size:18px;
color:#aaa;
margin:10px;
`;


export const LineButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #8b10ae;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 40px;
  margin-left:10px;
  width:50%;
`;

export const LineButtonText = styled.Text`
  color: #8b10ae;
  font-weight: bold;
  font-size: 13px;
`;

export const Undraw = styled.Image`
  flex: 1;
  transform: scale(.45);
  top:-100px;
  
`;

export const Code = styled.View`
  background: #FFF;
  padding: 2px;
  align-self: center;
`;