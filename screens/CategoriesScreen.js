import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryitem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryitem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
