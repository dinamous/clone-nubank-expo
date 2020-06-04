import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow:hidden;
  background:#FFF;
  padding:2px;
  align-self: center;

`;
export const QRCode = styled.Image`
  
`;

export const Nav = styled.View`
margin-top:30px;
border-top-width:${StyleSheet.hairlineWidth}px;
border-top-color: rgba(255,255,255,.5);


`;

export const NavItem = styled.View`
flex-direction:row;
align-items:center;
padding:12px 0;
border-bottom-width:${StyleSheet.hairlineWidth}px;
border-bottom-color: rgba(255,255,255,.5);
`;

export const NavText = styled.Text`
font-size:15px;
color:#fff;
padding-left:20px;
`;

export const SignOut = styled.TouchableOpacity`
border-width:${StyleSheet.hairlineWidth}px;
border-color: rgba(255,255,255,.5);
border-radius:4px;
justify-content:center;
align-items:center;
padding:12px;
margin-top:30px;
`;

export const SignOutText = styled.Text`
color:#FFF;
font-weight:bold;
font-size:15px;
`;
