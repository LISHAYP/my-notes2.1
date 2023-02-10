import { Pressable, StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AllCategories from './AllCategories'
import Icon from 'react-native-vector-icons/Ionicons'

 
const Home = ({ navigation }) => {
 

 
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable onPress={() =>
          navigation.navigate("Newnote")}>
          <Text style={styles.buttonText}>New note
            <Icon style={styles.buttonText} name='pencil' />
          </Text>
        </Pressable>
      </View>
     
     
      <Pressable >
        <AllCategories onPress={(category) =>
          navigation.navigate("Allnotes", {category: category})} />
      </Pressable>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  button: {
    flex: "row",
    backgroundColor: "pink",
    width: "80%",
    height: 60,
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "purple"

  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  container: {
    justifyContent: "center",
    padding: 30
  },
  buttontxt: {
    marginTop:140,
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine:"underline"
    
}
})