import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddNewNote from './screens/AddNewNote';
import AllNotes from './screens/AllNotes';
import HeaderS from './components/HeaderS'

 const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.header}>
<HeaderS/>
</View>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title:'HOME'}} />
        <Stack.Screen name="Newnote" component={AddNewNote} options={{title:'ADD NEW NOTE'}} />
        <Stack.Screen name="Allnotes" component={AllNotes}options={{title:' '}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
header :{
  paddingTop:20,
  marginTop: 20
}
});
