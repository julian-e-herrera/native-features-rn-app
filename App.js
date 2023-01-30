import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";

import PlaceDetails from "./screens/PlaceDetails";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constant/colors";
import Map from "./screens/Map";
import { useEffect } from "react";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Mapita",
            }}
          />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
