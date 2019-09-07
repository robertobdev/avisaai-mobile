import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';

const NotificationCard = ({ item, navigation }) => {
  const { title, description, date, news } = item;
  const handlePress = (detail) => {
    navigation.push('Detail', { detail: { attributes: detail } });
  }
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.info}>
        <Button style={styles.btn} onPress={() => handlePress(news)} >
          <Text style={styles.btnText}> Ver Mais</Text>
        </Button>
        <View style={styles.date}>
          <Ionicons name="ios-time" size={15} />
          <Text style={styles.icon}>{date}</Text>
        </View>
      </View>
    </View>
  );
}


export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    height: 180,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: 'gray'
  },
  btn: {
    color: '#fff',
    width: 100,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff'
  },
  info: {
    flexDirection: 'row',
    height: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    borderColor: '#ddd',
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginLeft: 5,
  },
  date: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  data: {
    flex:2
  }
});