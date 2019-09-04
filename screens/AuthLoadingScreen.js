import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

const AuthLoadingScreen = (props) => {

  useEffect(() => {
    _bootstrapAsync();
  }, []);
  
  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem('user');

    props.navigation.navigate(user ? 'App' : 'Auth');
  };
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}
export default AuthLoadingScreen;