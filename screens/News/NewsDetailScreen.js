import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View, Text, Image, Dimensions
} from 'react-native';
import { H1, H2, H3 } from 'native-base';
const NewsDetailScreen = ({ navigation }) => {
  const { title, description, createdAt, image } = navigation.state.params.detail.attributes;
  const [date, setDate] = useState('');
  useEffect(() => {
    const dateFormat = new Date(createdAt.toString());
    setDate(dateFormat.toLocaleDateString('pt-BR'));
  }, []);
  
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <H1 style={styles.title}>{title}</H1>
        <Text style={styles.date}>Publicado em: {date}</Text>
        <Image style={styles.thumb} source={{ uri: image.url() }} />
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
}
export default NewsDetailScreen;
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
  },
  thumb: {
    width: imageWidth,
    height: imageHeight,
    borderColor: 'green',
    borderWidth: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 9,
    color: 'gray',
    margin:16
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 16,
  },
  description: {
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 10
  }
});
