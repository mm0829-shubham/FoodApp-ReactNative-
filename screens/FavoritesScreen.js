import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/MealsList/MealsList";
import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
//   const favoriteMealsContext = useContext(FavoritesContext);
const favoriteMealsids = useSelector((state)=> state.favoriteMeals.ids)
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsids.includes(meal.id)
  );

  if (favoriteMeals.length === 0 ) {
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>You Dont have any Favorite Meals!</Text>
        </View>
    )
    
  }

  return <MealsList displayedMeals={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:18,
    fontFamily:'oswald-bold'

}
})