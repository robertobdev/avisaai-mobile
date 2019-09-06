import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View, RefreshControl
} from 'react-native';
import Parse from 'parse/react-native';
import NotificationCard from '../components/NotificationCard';
import _ from 'lodash';
const NotificationScreen = (props) => {

  const Notification = Parse.Object.extend('Notification');
  const query = new Parse.Query(Notification);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    setRefreshing(true);
    const query = new Parse.Query(Notification);
    query.find().then(async results => {
      let notifications = [];
      const cb = _.after(results.length, () => {
        setData(notifications);
        setRefreshing(false);
      });
      _.each(results, (result) => {
        let { id, attributes } = result;
        attributes = { ...attributes };
        attributes.key = id;
        const date = new Date(attributes.createdAt.toString());
        attributes.date = date.toLocaleDateString('pt-BR') + " " + date.toLocaleTimeString('pt-BR');
        const newsRelation = result.relation("news_relation");

        newsRelation.query().first().then((newsRelationData) => {
          attributes.news = newsRelationData.attributes;
          attributes.news = { ...attributes.news, key: newsRelationData.id };
          notifications = [...notifications, attributes];
          cb();
        });
      });
    });
  }
  const onRefresh = () => {
    getAll();
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
        {data.map((notification) => {
          return <NotificationCard item={notification} navigation={props.navigation} key={notification.key}></NotificationCard>          
        })}
      </ScrollView>
    </View>
  );

}

export default NotificationScreen;

NotificationScreen.navigationOptions = {
  title: 'Notificações',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f5f8',
  },
  contentContainer: {
    paddingTop: 20,
  },
});