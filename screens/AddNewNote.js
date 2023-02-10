import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import NoteForm from '../components/NoteForm'





const AddNewNote = () => {
    return (
        <View>
            
            <NoteForm />
        
        </View>
    )
}

export default AddNewNote

const styles = StyleSheet.create({
    date: {
        paddingTop: 20,
        paddingLeft: 20
    }
})
