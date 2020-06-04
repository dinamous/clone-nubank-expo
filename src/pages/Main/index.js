import React from "react";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Menu from "../../components/Menu";
import Carousel from "../../components/Carousel";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Content, Card } from "./styles";
import { CardHeader,CardContent,CardFooter,Title, Description,Annotation} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(offset);
        translateY.setValue(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-360, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
           <CardHeader>
                    <MaterialIcons name="attach-money" size={28} color="#666" />
                    <MaterialIcons name="visibility-off" size={24} color="#666" />
                </CardHeader>
                <CardContent>
                    <Title>Saldo Disponível</Title>
                    <Description>R$250,98</Description>
                </CardContent>
                <CardFooter>
                    <Annotation>Tranferência de R$15,00 recebida de Yasmin hoje às 14:00h</Annotation>
                </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
