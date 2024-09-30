import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealsItems({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("Meal Details", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItems}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
}

export default MealsItems;

const styles = StyleSheet.create({
  mealItems: {
    margin: 20,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e4f5f7",
    elevation: 8,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "oswald-bold",
    margin: 10,
  },  
  buttonPressed: {
    opacity: 0.5,
  },
});
