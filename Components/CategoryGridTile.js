import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color ,onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 15,    
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "oswald-light",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
