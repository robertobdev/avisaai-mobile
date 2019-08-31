import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Parse } from 'parse/react-native';
import _ from 'lodash';
const MapsScreen = () => {
  const Markers = Parse.Object.extend('Markers');

  const [location, setLocation] = useState({
    latitude: -14.235,
    longitude: -51.09253,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [error, setError] = useState({});
  const [markers, setMarkers] = useState([]);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setError({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const getMarkers = () => {
    const query = new Parse.Query(Markers);
    query.find().then(async results => {
      let markers = [];
      const cb = _.after(results.length, () => {
        setMarkers(markers);
      });
      _.each(results, (result) => {
        let { id, attributes } = result;
        attributes = { ...attributes };
        attributes.key = id;
        attributes.date = new Date(attributes.createdAt.toString()).toLocaleDateString('pt-BR');

        const type = result.relation("type_relation");

        type.query().first().then((type) => {
          attributes.type = type.attributes;
          attributes.type = { ...attributes.type, key: type.id };
          markers = [...markers, attributes];
          cb();
        });
      });
    });
  }

  useEffect(() => {
    getMarkers();
    
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }, []);

  return (
    <MapView region={location} style={styles.container}>
      {markers.map((marker) => {
        return <View key={marker.key}>
          <Circle center={{
            latitude: parseFloat(marker.latitude),
            longitude: parseFloat(marker.longitude),
          }}
            radius={marker.radius}
            fillColor={color[marker.type.image]} />
          <Marker
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            title={marker.title}
            description={marker.description}
            pinColor={color[marker.type.image]} />
        </View>

      })}
    </MapView>
  );
}

export default MapsScreen;

MapsScreen.navigationOptions = {
  title: 'Mapa Interativo',
};
const color = {
  rain: 'rgba(109, 193, 255, 0.4)',
  overflow: 'rgba(34, 75, 139, 0.4)',
  sliding: 'rgba(73, 56, 32, 0.4)',
  risk: 'rgba(187, 33, 36, 0.4)'
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
