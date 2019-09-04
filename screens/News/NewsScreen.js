import React, { useState, useEffect } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View, RefreshControl
} from 'react-native';
import ListItemNews from '../../components/ListItemNews';
import Parse from 'parse/react-native';

const NewsScreen = (props) => {
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    setRefreshing(true);
    const News = Parse.Object.extend('News');
    const query = new Parse.Query(News);
    query.find().then((results) => {
      setNews(results);
      setRefreshing(false);
    }, (error) => {
      console.error('Error while fetching TypeMakers', error);
      setRefreshing(false);
    });
  }

  const handlePress = (detail) => {
    props.navigation.push('Detail', { detail });
  }
  const onRefresh = () => {
    getNews();
  }
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
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
    paddingTop: 20,
  },

});
