import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";

import { PROVIDER_GOOGLE } from "expo";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initianlLng,
  };
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  let pinLatitude;
  if (selectedLocation) {
    pinLatitude = selectedLocation.latitude;
    pinLongitude = selectedLocation.longitude;
  }
  const mapRegion = {
    latitude: initialLocation.initialLat || 37.78,
    longitude: initialLocation.initianlLng || -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  //   const region = {
  //     latitud: -37.2978293,
  //     longitud: -59.150639,
  //     latitudDelta: 0.0922,
  //     longitudDelta: 0.0421,
  //   };

  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      latitude: lat,
      longitude: lng,
    });
  };

  const savePickLocationhandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location pick",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLatitude: selectedLocation.latitude,
      pickedLongitude: selectedLocation.longitude,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) return;
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          onPress={savePickLocationhandler}
          color={tintColor}
          size={24}
        />
      ),
    });
  }, [navigation, savePickLocationhandler, initialLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      provider={PROVIDER_GOOGLE}
      onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: pinLatitude,
            longitude: pinLongitude,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
