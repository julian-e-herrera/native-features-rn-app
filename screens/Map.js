import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

import { PROVIDER_GOOGLE } from "expo";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  let pinLatitude, pinLongitude;
  if (selectedLocation) {
    pinLatitude = selectedLocation.latitude;
    pinLongitude = selectedLocation.longitude;
  }
  const mapRegion = {
    latitude: pinLatitude || 37.78,
    longitude: pinLongitude || -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  //   const region = {
  //     latitud: -37.2978293,
  //     longitud: -59.150639,
  //     latitudDelta: 0.0922,
  //     longitudDelta: 0.0421,
  //   };
  return (
    <MapView
      style={styles.map}
      initialRegion={mapRegion}
      provider={PROVIDER_GOOGLE}></MapView>
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
