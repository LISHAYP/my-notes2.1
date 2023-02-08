import { Pressable, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable onPress={() =>
          navigation.navigate("Newnote")}>
          <Text style={styles.buttonText}>New note    
          <Icon style={styles.buttonText}name='pencil'/>
          </Text>
        </Pressable>
      </View>

      <View style={styles.button}>
        <Pressable onPress={() =>
        navigation.navigate("Allnotes")}>
          <Text style={styles.buttonText}>All notes    
          <Icon style={styles.buttonText}name='list' />
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
button:{
  flex: "row",
backgroundColor: "pink",
width: "80%",
height:"20%",
justifyContent: "center",
marginHorizontal: 30,
marginVertical:30,
borderRadius:10,
padding: 10,
borderWidth: 2,
borderColor: "purple"

},
buttonText:{
  fontSize:25,
  textAlign: "center",
  fontWeight: "bold"
},
container:{
  justifyContent: "center",
  padding:30
}
})