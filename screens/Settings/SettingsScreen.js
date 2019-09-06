import React from 'react';
import { View, StyleSheet, AsyncStorage, Alert, Image } from 'react-native';
import { List, ListItem, Text, Left, Right, Icon } from 'native-base';

const SettingsScreen = ({ navigation }) => {

  goTo = (where) => {
    navigation.push(where);
  }
  leave = async () => {
    Alert.alert(
      'Sair',
      'Você realmente deseja sair?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim', onPress: async () => {
            await AsyncStorage.removeItem('user');
            navigation.navigate('Auth');
          }
        },
      ],
      { cancelable: false },
    );
  };
  return (<View>
    <View style={styles.version}>
      <Image style={styles.logo}
        source={require('../../assets/images/avisaailogo.png')} />
      <Text style={styles.name}>Avisa ai </Text>
      <Text style={styles.number}>version 1.0 </Text>
    </View>
    <List>
      <ListItem onPress={() => goTo('ChangePassword')}>
        <Left>
          <Text>Alterar Senha</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem onPress={() => goTo('About')}>
        <Left>
          <Text>Sobre</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem onPress={() => leave()}>
        <Left>
          <Text>Sair</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </List>
  </View>);
}

export default SettingsScreen;

SettingsScreen.navigationOptions = {
  title: 'Configurações',
};

const styles = StyleSheet.create({
  version: {
    margin: 40,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 380,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  number: {
    color: 'gray',
    fontSize: 11,
  }
});