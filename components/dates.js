import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const dates  = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
        `${date}.${month}.${year} ${hours}:${min}`
    );
  }, []);

  

  return (
    
        <View style={styles.container}>
          <Text style={styles.textStyle}>
{currentDate}
          </Text>
        </View>
       
  );
};

const styles = StyleSheet.create({
});

export default dates