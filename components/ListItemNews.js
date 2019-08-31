import React, { useEffect, useState } from 'react';
import { Text, } from 'native-base';
import { StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const ListItemNews = ({ item }) => {
  const { title, description, createdAt, image } = item;
  const [date, setDate] = useState('');
  useEffect(() => {
    const dateFormat = new Date(createdAt.toString());
    setDate(dateFormat.toLocaleDateString('pt-BR'));
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerThumb}>
          <Image style={styles.thumb} source={{ uri: image.url() }} />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerTitle}>
            <Text note numberOfLines={2} style={styles.title}>{title}</Text>
            <View style={styles.containerDate}>
              <Text style={styles.date}>{date}</Text>
              <Ionicons name='ios-arrow-forward' size={16} />
            </View>
          </View>
          <Text note numberOfLines={2}>{description}</Text>
        </View>
      </View>
    </>
  );

}
export default ListItemNews;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    paddingBottom: 5,
    borderBottomColor: '#e4e6e8',
    borderBottomWidth: 1,
  },
  containerThumb: {
    flex: 1,
    justifyContent: 'center'
  },
  thumb: {
    width: 90,
    height: 90,
    justifyContent: 'center'
  },
  containerInfo: {
    flex: 3,
    paddingLeft: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
    marginRight: 7
  },
  title: {
    color: 'black',
    width: 180,
  }
});