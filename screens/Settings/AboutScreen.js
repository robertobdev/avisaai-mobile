import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';


const AboutScreen = () => {
  return (<View style={styles.container}>
    <Text>O AvisaAi é uma aplicativo móvel que tem como principal objetivo Informar e Alertar a população sob possíveis risco, tais como: alagamento, fortes chuvas, deslizamento de terra e zonas de risco. </Text>
  </View>);
}

export default AboutScreen;

AboutScreen.navigationOptions = {
  title: 'Sobre',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});