import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  return (<View>
    <View style={styles.emailContainer}>
      <TextInput style={styles.textInput} placeholder="Senha Antiga"
        value={oldPassword}
        onChangeText={value => setOldPassword(value)}
        secureTextEntry={true} />
    </View>
    <View style={styles.emailContainer}>
      <TextInput style={styles.textInput} placeholder="Senha"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true} />
    </View>
    <View style={styles.confirmPasswordContainer}>
      <TextInput style={styles.textInput} placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
        secureTextEntry={true} />
    </View>
  </View>);
}

export default ChangePasswordScreen;

ChangePasswordScreen.navigationOptions = {
  title: 'Alterar senha',
};

const styles = StyleSheet.create({
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
  },
  textInput: {
    color: '#989899',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
});