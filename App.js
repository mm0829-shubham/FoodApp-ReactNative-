import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#bbdcf0" },
        headerTitleStyle: {
          fontFamily: "oswald-bold",
          fontSize: 20,
          color: "#3b3d3d",
        },
        headerTitleAlign: "center",
        sceneContainerStyle: {
          backgroundColor: "#e4edf2",
        },
        drawerContentStyle: { backgroundColor: "#bbdcf0" },
        drawerInactiveTintColor: "black",
        drawerActiveBackgroundColor: "#90d8f5",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "oswald-bold": require("./assets/fonts/Oswald-Bold.ttf"),
    "oswald-light": require("./assets/fonts/Oswald-Light.ttf"),
  });
  if (!fontsLoaded) {
    return;
    // <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#bbdcf0" },
              headerTitleStyle: {
                fontFamily: "oswald-bold",
                fontSize: 20,
                color: "#3b3d3d",
              },
              headerTitleAlign: "center",
              contentStyle: {
                backgroundColor: "#e4edf2",
              },
            }}
          >
            <Stack.Screen
              name="Meals Categories"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="Meal Details"
              component={MealDetailsScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    fontFamily: "oswald-bold",
  },
});
