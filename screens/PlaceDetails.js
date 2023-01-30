import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constant/colors";

const PlaceDetails = ({ route, navigation }) => {
  const showOnMap = () => {
    navigation.navigate("Map", {
      //should show data from fetched api
      initialLat: 30.999,
      initialLng: -151.2778,
    });
  };
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {}, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image styles={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMap}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: { justifyContent: "center", alignItems: "center" },
  addressContainer: { paddi: 20 },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
