import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";

const categories = ["Personal", "Work", "School", "Other"];

const CategoryButtonGroup = ({ onPress }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    const handlePress = (index) => {
      setSelectedIndex(index);
      onPress(categories[index]);
    };
  
    return (
      <View style={styles.container}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedIndex === index ? styles.selectedButton : null,
            ]}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.text}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 50,
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
    },
    button: {
      padding: 10,
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      margin: 5,
    },
    selectedButton: {
      backgroundColor: "#808080",
    },
    text: {
      color: "#333",
      fontWeight: "bold",
    },
  });

export default CategoryButtonGroup;
