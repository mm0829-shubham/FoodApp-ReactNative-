import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
//   const favoriteMealsContex = useContext(FavoritesContext);

const favoriteMealsIds = useSelector((state)=> state.favoriteMeals.ids)
const dispatch = useDispatch()
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealsIsFavorite = favoriteMealsIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealsIsFavorite) {
    //   favoriteMealsContex.removeFavorites(mealId);
    dispatch(removeFavorite({id:mealId}))
    } else {
    //   favoriteMealsContex.addFavorites(mealId);
    dispatch(addFavorite({id:mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsIsFavorite ? "heart" : "heart-outline"}
            color="black"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.detailsContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontFamily: "oswald-bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
  },
  detailsContainer: {
    marginHorizontal: 16,
  },
  textDetails: {
    color: "white",
  },
});
