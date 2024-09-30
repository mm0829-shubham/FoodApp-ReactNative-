import { StyleSheet, View, FlatList } from "react-native";
import MealsItems from "./MealItems";

function MealsList({displayedMeals }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealsItemsProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealsItems {...mealsItemsProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
