import React, { useState, useEffect } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import ListItemNews from '../../components/ListItemNews';
import Parse from 'parse/react-native';

const NewsScreen = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const News = Parse.Object.extend('News');
    const query = new Parse.Query(News);
    query.find().then((results) => {
      setNews(results);
      console.log('Achou news');
    }, (error) => {
      console.error('Error while fetching TypeMakers', error);
    });
  }, []);

  const handlePress = (detail) => {
    props.navigation.push('Detail', { detail });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {news.map((newsItem) => {
          return <TouchableHighlight onPress={() => handlePress(newsItem)} key={newsItem.id} underlayColor="white">
            <ListItemNews item={newsItem.attributes}></ListItemNews>
          </TouchableHighlight>;
        })}
      </ScrollView>
    </View>
  );
}
export default NewsScreen;
NewsScreen.navigationOptions = {
  title: 'Notícias',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
 
});
