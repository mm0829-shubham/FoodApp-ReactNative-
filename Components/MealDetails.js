import { View, Text, StyleSheet } from "react-native";

function MealDetails({
    duration,
    complexity,
    affordability,}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{duration} mins</Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsItem: {
    fontSize: 14,
    marginHorizontal: 8,
    fontFamily: "oswald-light",
  },
});
