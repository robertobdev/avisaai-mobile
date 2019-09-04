import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity, Alert
} from 'react-native';
import Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';
const SignInScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    Parse.User.logIn(username, password).then(async (user) => {
      await AsyncStorage.setItem('user', user.attributes.toString());
      props.navigation.navigate('App');
    }).catch(error => {
      Alert.alert('Aviso', 'Usuário o senha inválidos.');
      console.log(error);
    });
  }

  const handleCreateAccount = () => {
    props.navigation.navigate('SignUp');    
  }

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo}
          source={require('../assets/images/avisaailogo.png')} />
      </View>
      <View style={styles.container}>

        <View style={styles.emailContainer}>
          <TextInput style={styles.textInput} placeholder="Usuário" value={username}
            onChangeText={value => setUsername(value)}
            keyboardType="email-address" />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.textInput} value={password}
            onChangeText={value => setPassword(value)} placeholder="Senha"
            secureTextEntry={true} />
        </View>
        <TouchableOpacity onPress={() => handleLogin()} style={styles.btn}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.normalContainer}>
        <Text style={styles.normalText}>Você tem uma conta?</Text>
      </View>
      <TouchableOpacity onPress={() => handleCreateAccount()}>
        <View style={styles.createAccount}>
          <Text style={styles.createText}>Criar uma nova conta</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}

export default SignInScreen;

SignInScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  btn: {
    width: 325,
    height: 50,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50
  },
  logo: {
    width: 380,
    height: 80,
    resizeMode: 'contain',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 30,
    alignItems: 'flex-end',
  },
  createAccount: {
    height: 30,
    paddingLeft: 30,
  },
  normalContainer: {
    height: 20,
    marginTop: 350,
    paddingLeft: 30,
  },
  normalText: {
    textAlign: 'center',
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  createText: {
    color: 'blue',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  logoContainer: {
    height: 170,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textInput: {
    color: '#989899',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  button: {
    width: 325,
    borderColor: '#2c8ef4',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 24,
    marginTop: 20,
    backgroundColor: '#2c8ef4',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2c8ef4',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
  emailContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    backgroundColor: '#F5F6F7'
  },
  passwordContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#F5F6F7'

  }

});