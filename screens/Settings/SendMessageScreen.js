import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { Textarea } from "native-base";

const SendMessageScreen = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (<View>
    <View style={styles.emailContainer}>
      <TextInput style={styles.textInput} placeholder="Título"
        value={title}
        onChangeText={value => setTitle(value)} />
    </View>
    <View style={styles.emailContainer}>
      <Textarea rowSpan={20} bordered placeholder="Mensagem" value={message}
        onChangeText={value => setMessage(value)} />
    </View>
  </View>);
}

export default SendMessageScreen;

SendMessageScreen.navigationOptions = {
  title: 'Enviar Email',
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