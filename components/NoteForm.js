import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { useState, Component } from 'react'
import { TextInput, Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"
import { ButtonGroup } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryButtonGroup from '../components/GroupButton'

const NoteForm = () => {
    const [note, setNote] = useState('')
    const navigation = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
        newNote.category = category;
    };

    const newNote = { note, date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`, category: selectedCategory };


    const saveNote = async () => {
        console.log({ note });
        console.log({ newNote });
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value) : []
        n.push(newNote);
        await AsyncStorage.setItem("NOTES", JSON.stringify(n))

        setNote('')
        console.log({ note });
        console.log({ newNote });
    }


    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput
                    style={styles.inputtxt}
                    placeholder="take a note..."
                    multiline
                    value={note}
                    spellCheck="true"
                    onChangeText={setNote}
                />
            </View>
            <CategoryButtonGroup onPress={handleCategoryPress} />
            <View style={styles.containerMid}>
                <TouchableOpacity
                    style={styles.form}
                    onPress={saveNote}>
                    <Text style={styles.buttontxt}>
                        save note
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteForm

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "100%",
        alignItems: "center",
        flexDirection: "row "
    },
    input: {
        height: 150,
        width: Dimensions.get("window").width - 50,
    },
    form: {
        width: Dimensions.get("window").width - 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "purple",
        height: 40,
  
    },
    inputtxt: {
        fontSize: 15,
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
    },
    containerB: {
        justifyContent: "center",
        width: Dimensions.get("window").width - 50,
    }
})