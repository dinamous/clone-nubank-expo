import { StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const QRCode = styled.Image`
`;

export const Code = styled.View`
  background: #fff;
  padding: 2px;
  align-self: center;
`;

export const AccountInfo = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const AccountInfoText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 2px;
`;

export const AccountInfoTextBold = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

export const Nav = styled.View`
  width: 100%;
  margin-top: 20px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.6);
`;

export const NavItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 13px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.6);
`;

export const NavText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
