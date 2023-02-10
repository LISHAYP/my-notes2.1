import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AllCategories(props) {
    const [notes, setNotes] = useState([])
    const navigation = useNavigation();
    const categories = [{name:"Personal", icon: 'hand-left-outline'}, {name:"Work", icon: 'logo-firebase'}, {name:"School", icon: 'school-outline'}, {name:"Other", icon: 'albums-outline'}];

    useFocusEffect(
        React.useCallback(() => {
            getNotes()
        }, [0])
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const handleCategoryPress = (category) => {
        props.onPress(category);
        
    };
    
    return (
        <ScrollView>
      <View style={styles.container}>

        <View style={styles.notes}>
          {
            categories.map((item) => {
              let count = 0;
              notes.forEach(note => {
                if (note.category === item.name) {
                  count++;
                }
              });

              return (
                <View style={styles.bigView}>

                  <TouchableOpacity
                    onPress={() => handleCategoryPress(item.name)}
                    style={styles.card}
                  >
                    <Icon name={item.icon} style={styles.icon} />
                    <Text style={styles.notes}>{item.name }</Text>
                    <Text style={styles.couner}>{count}</Text>

                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        fontSize: 20,
    },
    notes: {
        fontSize: 24,
        textAlign:"left",
        fontWeight:"bold"
    },
  
    containerMid: {
        padding: 20
    },
    card: {
        flexDirection:"row",
        textAlign:"left",
        padding: 10,
    justifyContent:"center",
        marginTop:7,
        fontSize: 18,
        width: Dimensions.get("window").width-60,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#FFF0F5",


    },
    icon:{
        fontSize:25,
        padding:10
    },
    couner:{
        paddingLeft:20,
        fontSize:30,
        color:"#FF1493",
        fontWeight:"bold"
        
    }
});