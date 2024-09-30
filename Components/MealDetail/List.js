import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItems}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItems:{
        borderRadius:8,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:24,
        marginVertical:4,
        backgroundColor:'#a8daf9'
    },
    itemText:{
        textAlign:'center',
        fontFamily:'oswald-light',
        fontSize:14
    }
});
