import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

const SignUp = () => {

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo}
          source={require('../assets/images/avisaailogo.png')} />
      </View>
      <View style={styles.container}>

        <View style={styles.emailContainer}>
          <TextInput style={styles.textInput} placeholder="Email"
            keyboardType="email-address" />
        </View>
        <View style={styles.emailContainer}>
          <TextInput style={styles.textInput} placeholder="Usuário"
            keyboardType="name-phone-pad" />
        </View>
        <View style={styles.emailContainer}>
          <TextInput style={styles.textInput} placeholder="Senha"
            secureTextEntry={true} />
        </View>
        <View style={styles.confirmPasswordContainer}>
          <TextInput style={styles.textInput} placeholder="Confirmar Senha"
            secureTextEntry={true} />
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
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
    backgroundColor: '#F5F6F7',
    marginTop: 1,
  },
  confirmPasswordContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#F5F6F7',
    marginTop: 1,
  }
});