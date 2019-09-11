import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { Textarea, Button, Text, Toast } from "native-base";
import Parse from 'parse/react-native';
const SendMessageScreen = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');


  const handlePress = () => {
    const messages = Parse.Object.extend('messages');
    const myNewObject = new messages();

    myNewObject.set('title', title);
    myNewObject.set('message', message);    
    myNewObject.relation("user_relation").add(Parse.User.current());
    // myNewObject.set('user_relation', Parse.User.current());
    myNewObject.set('is_read', false);
    myNewObject.save().then(
      (result) => {
        Toast.show({
          text: 'Mensagem Enviada',
          buttonText: 'Okay',
          duration: 1000,
          onClose: () => {
            navigation.pop();
          }
        });
        console.log('messages created', result);
      },
      (error) => {
        Toast.show({
          text: 'Não foi possivel enviar essa mensagem!',
          buttonText: 'Okay',
          duration: 2000
        });
        console.log('Error while creating messages: ', error);
      }
    );
  }

  return (<View class={styles.container}>
    <View style={styles.title}>
      <TextInput style={styles.textInput} placeholder="Título"
        value={title}
        onChangeText={value => setTitle(value)} />
    </View>
    <View >
      <Textarea style={styles.message} rowSpan={11} bordered placeholder="Mensagem" value={message}
        onChangeText={value => setMessage(value)} />
    </View>
    <View style={styles.btn}>
      <Button block onPress={() => handlePress()}>
        <Text>Salvar</Text>
      </Button>
    </View>
  </View>);
}

export default SendMessageScreen;

SendMessageScreen.navigationOptions = {
  title: 'Enviar Email',
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  message: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F5F6F7',
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 10,
  },
  title: {
    padding: 10,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F5F6F7',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  textInput: {
    color: '#989899',
    flex: 1,
    fontSize: 14,
  },
});