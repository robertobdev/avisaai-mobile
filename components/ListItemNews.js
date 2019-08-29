import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';
export default class ListItemNews extends Component {
  render() {
    return (
      <>
        <ListItem thumbnail style={styles.item}>
          <Left style={styles.left}>
            <Thumbnail large square source={require('../assets/images/rain.jpg')} style={styles.thumbnail} />
          </Left>
          <Body style={styles.body}>
            <View>
              <Text>Olar</Text>  
            </View>
            <Text>Lorem ipsum dolor</Text>
            <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nibh ac ex viverra gravida. Curabitur dictum efficitur nibh, quis fringilla neque consequat vulputate.</Text>
          </Body>
          {/* <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right> */}
        </ListItem>
      </>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    margin: 0,
    padding: 0, 
  },
  left: {
    width:100,
  },
  body: {
    backgroundColor: 'red', 
    padding:0
  },
  thumbnail: {
    width: 90,
    marginLeft: 5,
    height: 90,
  }
});