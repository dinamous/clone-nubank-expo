import React from "react";


import {
  Container,
  Code,
  QRCode,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  AccountInfo,
  AccountInfoText,
  AccountInfoTextBold,
} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";
import image from "../../assets/qrcode.png"

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          source={image}
        />
      </Code>

      <AccountInfo>
        <AccountInfoText>
          Banco
          <AccountInfoTextBold> 123 - Nu Pagamentos S.A</AccountInfoTextBold>
        </AccountInfoText>

        <AccountInfoText>
          Agência
          <AccountInfoTextBold> 1010</AccountInfoTextBold>
        </AccountInfoText>

        <AccountInfoText>
          Conta
          <AccountInfoTextBold> 050505-5</AccountInfoTextBold>
        </AccountInfoText>
      </AccountInfo>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={24} color="#FFF" />
          <NavText>Me ajuda</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={24} color="#FFF" />
          <NavText>Perfil</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="account-balance" size={24} color="#FFF" />
          <NavText>Configurações conta</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="account-balance-wallet" size={24} color="#FFF" />
          <NavText>Pedir conta PJ</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={24} color="#FFF" />
          <NavText>Configurações do app</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
