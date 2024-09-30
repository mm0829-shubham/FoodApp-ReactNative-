import { View,Text, StyleSheet  } from "react-native";




function Subtitle({children}) {
    return(
        
      <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        fontFamily: "oswald-bold",
        fontSize: 16,
        textAlign: "center",
      },
      subTitleContainer: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginHorizontal: 30,
        marginVertical:4,
        padding: 6,
      },
})