import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AllNotes(props) {
    const [notes, setNotes] = useState([])
    const navigation = useNavigation();

    const category = props.route.params.category;
    console.log(category + ' working!')
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

   
    const removeNote = async (index) => {
        try {
            let notes = await AsyncStorage.getItem("NOTES");
            notes = JSON.parse(notes);
            notes.splice(index, 1);
            await AsyncStorage.setItem("NOTES", JSON.stringify(notes));
            setNotes(notes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}> {category} </Text>
                <View style={styles.containerMid}>
                    <TouchableOpacity
                        style={styles.form}
                        onPress={() => { props.navigation.navigate("Newnote"); }}>
                        <Text style={styles.buttontxt}>
                            new note  <Icon name="add-outline" />
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.notes}>
                    {notes ?
                        notes.filter(note => note.category === category).map((item, index) => (
                            <View style={styles.bigView}>
                                <TouchableOpacity onPress={() => removeNote(index)}>
                                    <View style={styles.trash}>
                                        <Icon name="trash" style={styles.trash} />
                                    </View>
                                </TouchableOpacity>
                                <View key={notes.length + 1} style={styles.card}>
                                    <Text style={styles.date}>{item.date}</Text>
                                    <Text style={styles.notes}>{item.note}</Text>
                                </View>
                            </View>
                        )) : null
                    }
                </View>

            </View>

         
         
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
    },
    notes: {
        fontSize: 24,
    },
    buttontxt: {
        textAlign: "center",
        alignItems: "center",
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    containerMid: {
        padding: 20
    }, form: {
        width: Dimensions.get("window").width - 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "purple",
        height: 40,
  
    },
    card: {
        padding: 12,
        marginLeft: 10,
        fontSize: 18,
        width: "80%",
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#ffffff",


    }
    , date: {
        textAlign: "left",

    },
    trash: {
        fontSize: 45,
        marginTop:7
       
    },
    bigView: {
flexDirection:"row",
padding:5
    }
,
header:{
    textAlign: "center",
    fontSize:50,
    fontWeight:"bold",
    color:"#FF1493"
}
});